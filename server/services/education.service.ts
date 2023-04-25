import {In} from 'typeorm'
import DBDataSource from '../db'
import Education from '../entities/education'
import Employee from '../entities/employee'
import {IEducationList} from '../types/interfaces/education'
import pagesCalc from '../utils/pagination'

const getAllEducations = async (order: any = 'ASC', skip: string = '0', take: string = '10'): Promise<IEducationList> => {
	let educationList = await findAllEducationByOrder(order, skip, take)
	const pagination = pagesCalc(educationList, skip, take)
	return {educationList, pagination}
}

const addNewEducation = async (req: any, order: string, skip: string, take: string): Promise<IEducationList> => {
	const newEducation = new Education()
	newEducation.title = req.body.title
	await DBDataSource.manager.save(newEducation)
	return getAllEducations(order, skip, take)
}

const updateEducationById = async (id: number, title: string, order: string, skip: string, take: string) => {
	const educationRepo = await DBDataSource.getRepository(Education)
	const currentEducation = await educationRepo.findOneBy({id})
	if (currentEducation) {
		currentEducation.title = title
		await educationRepo.save(currentEducation)
		return getAllEducations(order, skip, take)
	}
	return
}

const deleteEducationById = async (id: number[]): Promise<any> => {
	const educationRepo = await DBDataSource.getRepository(Education)
	return await educationRepo.delete(id)
}

//

const findAllEducationByOrder = async (order: any, skip: string, take: string) => {
	const educationRepo = await DBDataSource.getRepository(Education)
	return await educationRepo.findAndCount({
		order:
			{
				id: order,
			},
		skip: Number(skip),
		take: Number(take),
	})
}

const findEducationById = async (req: any) => {
	const educationRepo = await DBDataSource.getRepository(Education)
	return await educationRepo.findOneBy({id: req.body.id})
}

const findEducationUsagesByEmployee = async (id: number[]) => {
	const employeesRepo = await DBDataSource.getRepository(Employee)
	return await employeesRepo.findBy({educationId: In(id)})
}

export default {
	getAllEducations, addNewEducation, deleteEducationById, findEducationById, updateEducationById,
	findAllEducationByOrder, findEducationUsagesByEmployee,
}
