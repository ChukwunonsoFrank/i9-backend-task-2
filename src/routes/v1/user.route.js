import express from 'express'
import controller from '../../controllers/user.controller.js'
const Router = express.Router()

Router.post('/operation/compute', controller.show)

export default Router