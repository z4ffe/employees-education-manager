import * as express from 'express'
import employeeController from '../controllers/employee.controller'
const router = express.Router()

router.route('/create').post(employeeController.createNewEmployee)

export default router


