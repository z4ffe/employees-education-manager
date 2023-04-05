import * as express from 'express'
import employeeController from '../controllers/employeeController'
const router = express.Router()

router.route('/create').post(employeeController.createNewEmployee)

export default router


