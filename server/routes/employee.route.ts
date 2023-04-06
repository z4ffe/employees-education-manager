import * as express from 'express'
import employeeController from '../controllers/employee.controller'
const router = express.Router()

router.route('')
   .get(employeeController.getAllEmployees)
   .post(employeeController.createNewEmployee)
   .patch(employeeController.updateEmployeeById)
   .delete(employeeController.deleteEmployeeById)

export default router


