import {ObjectLiteral} from 'typeorm'
import DBDataSource from '../db'
import Employee from '../entities/employee'

const fetchAllEmployees = async (): Promise<ObjectLiteral[]> => {
	const employeeRepository = DBDataSource.getRepository(Employee)
	return await employeeRepository.find({
		order: {
			last_name: 'ASC',
		},
		relations: {
			educationId: true,
		},
	})
}

const createNewEmployee = async (req: any): Promise<Employee> => {
	const createdEmployee = new Employee()
	createdEmployee.first_name = req.body.first_name
	createdEmployee.middle_name = req.body.middle_name
	createdEmployee.last_name = req.body.last_name
	return await DBDataSource.manager.save(createdEmployee)
}

const updateEmployeeById = async (id: number, req: any) => {
	const {first_name, middle_name, last_name} = req.body
	const employeeRepository = await DBDataSource.getRepository(Employee)
	const currentEmployee = await employeeRepository.findOneBy({id})
	if (currentEmployee) {
		currentEmployee.first_name = first_name
		currentEmployee.middle_name = middle_name
		currentEmployee.last_name = last_name
		return await employeeRepository.save(currentEmployee)
	}
}

const deleteEmployeeById = async (id: number) => {
	const employeeRepository = await DBDataSource.getRepository(Employee)
	return await employeeRepository.delete({id})
}

//

const findEmployeeById = async (req: any) => {
	const employeeRepository = await DBDataSource.getRepository(Employee)
	return await employeeRepository.findOneBy({id: req.body.id})
}

export default {createNewEmployee, fetchAllEmployees, findEmployeeById, deleteEmployeeById, updateEmployeeById}
