# HNG9 Backend Task(Stage 2)

👩‍💻 HNG9 Backend Stage 2 Task - A REST API with a POST endpoint that performs an arithmetic operation and returns a result.

## Usage

#### Making a generic request:
In this example, we are using the `curl` command line tool to make a request with the `operation_type` Enum and the two integers the operation will be performed on, `x` and `y`.

```bash
curl -d '{"operation_type": {"value": "addition"}, "x": 10, "y": 10}' -H 'Content-Type: application/json' https://hng9-backend-task-2.onrender.com/v1/operation/compute
```

![Generic response in the terminal](https://github.com/ChukwunonsoFrank/i9-backend-task-2/blob/main/generic-response.png "Generic response in the terminal")

#### Bonus(Describing the operation in words):
Here, we describe the operation we want to execute in a sentence and pass it as a string in the `operation_type` parameter of the request body. This feature is powered by the OpenAI GPT-3 API via the `text-davinci-002` model.

```bash
curl -d '{"operation_type": "Can you please add 4 and 5 for me?"}' -H 'Content-Type: application/json' https://hng9-backend-task-2.onrender.com/v1/operation/compute
```

![GPT-3 response in the terminal](https://github.com/ChukwunonsoFrank/i9-backend-task-2/blob/main/gpt-3-response.png "GPT-3 response in the terminal")


## License

Licensed under [MIT License](LICENSE). © Kanu Frank Chukwunonso.
