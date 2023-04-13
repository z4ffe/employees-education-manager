import DBDataSource from '../db'
import Education from '../entities/education'

const addNewEducation = async (req: any) => {
	const newEducation = new Education()
	newEducation.title = req.body.title
	return await DBDataSource.manager.save(newEducation)
}

const getAllEducations = async (order: any = 'ASC', skip: any = 0, take: any = 10) => {
	const educationRepository = await DBDataSource.getRepository('education')
	return await educationRepository.findAndCount({
		order:
			{
				id: order,
			},
		skip: skip,
		take: take,
	})
}

const updateEducationById = async (id: number, title: string) => {
	const educationRepository = await DBDataSource.getRepository('education')
	const currentEducation = await educationRepository.findOneBy({id})
	if (currentEducation) {
		currentEducation.title = title
		return await educationRepository.save(currentEducation)
	}
}

const deleteEducationById = async (id: number[]) => {
	const educationRepository = await DBDataSource.getRepository('education')
	return await educationRepository.delete(id)
}

//

const findEducationById = async (req: any) => {
	const educationRepository = await DBDataSource.getRepository('education')
	return await educationRepository.findOneBy({id: req.body.id})
}

export default {getAllEducations, addNewEducation, deleteEducationById, findEducationById, updateEducationById}
