import dotenv from 'dotenv'
dotenv.config()

export default {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3333,
    openapi_key: process.env.OPEN_API_SECRET_KEY
}