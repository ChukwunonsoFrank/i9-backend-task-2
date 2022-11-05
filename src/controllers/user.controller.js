import got from 'got'
import env from '../config/env.js'

function compute(operation, x, y) {
  switch (operation) {
    case 'addition':
      return x + y

    case 'subtraction':
      return x - y

    case 'multiplication':
      return x * y
  }
}

function extractResultAndOperationFromGPT3Response(output) {
  const splitResponse = output.split('is')
  const operationType = String(splitResponse[2]).trim()
  const pivotSplit = splitResponse[1].split('and')
  const result = parseFloat(String(pivotSplit[0]).trim())
  return {
    operationType,
    result,
  }
}

async function processGPT3Prompt(question) {
  const primeQuestion =
    'Human: Can you please add the following numbers together - 13 and 25?\nAI: The answer is 38 and the operation is addition.\n'
  const url = 'https://api.openai.com/v1/completions'
  const prompt = `${primeQuestion}Human: ${question}`
  const params = {
    model: 'text-davinci-002',
    prompt: prompt,
    max_tokens: 150,
    temperature: 0.9,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: '\nHuman',
  }
  const headers = {
    Authorization: `Bearer ${env.openapi_key}`,
  }
  try {
    const data = await got.post(url, { json: params, headers: headers }).json()
    const output = `${data.choices[0].text}`
    const extractedData = extractResultAndOperationFromGPT3Response(output)
    return extractedData
  } catch (err) {
    throw new Error(err)
  }
}

export default {
  show: async (request, response, next) => {
    const { operation_type, x, y } = request.body

    if (typeof operation_type === 'object') {
      const result = compute(operation_type.value, x, y)
      response.status(200).json({
        slackUsername: 'franknonso',
        result,
        operation_type: operation_type.value,
      })
    }

    if (typeof operation_type === 'string') {
      const { operationType, result } = await processGPT3Prompt(operation_type)
      response.status(200).json({
        slackUsername: 'franknonso',
        result,
        operation_type: operationType,
      })
    }
  },
}
