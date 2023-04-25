import {Request, Response} from 'express'
import httpStatus from 'http-status'
import employeeService from '../services/employee.service'


const employeeController = {
	async getAllEmployees(_: Request, res: Response) {
		try {
			const employeesList = await employeeService.fetchAllEmployees()
			res.status(httpStatus.OK).json(employeesList)
		} catch (error) {
			console.log(error)
		}
	},
	async createNewEmployee(req: Request, res: Response) {
		try {
			const newEmployee = await employeeService.createNewEmployee(req)
			res.status(httpStatus.OK).json({message: 'created', newEmployee})
		} catch (error) {
			console.log(error)
		}
	},
	async updateEmployeeById(req: Request, res: Response) {
		try {
			const currentEmployee = await employeeService.findEmployeeById(req)
			if (!currentEmployee) {
				return res.status(httpStatus.NOT_FOUND).json('Employee not found')
			}
			const updatedEmployee = await employeeService.updateEmployeeById(currentEmployee.id, req)
			res.status(httpStatus.OK).json({message: 'updated', updatedEmployee})
		} catch (error) {
			console.log(error)
		}
	},
	async deleteEmployeeById(req: Request, res: Response) {
		try {
			const currentEmployee = await employeeService.findEmployeeById(req)
			if (!currentEmployee) {
				return res.status(httpStatus.NOT_FOUND).json('Employee not found')
			}
			const deletedEmployee = await employeeService.deleteEmployeeById(currentEmployee.id)
			res.status(httpStatus.OK).json({message: 'deleted', deletedEmployee})
		} catch (error) {
			console.log(error)
		}
	},
}

export default employeeController
