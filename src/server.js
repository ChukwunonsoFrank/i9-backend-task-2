import app from './config/express.js'
import env from './config/env.js'

app.listen(env.port, () => { console.log(`API server running on port ${env.port} (${env.environment})`) })