import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import educationService from '../services/education.service'
import {IQueryOrder} from '../types/interfaces/query'

const educationController = {
	async getAllEducations(req: Request, res: Response, next: NextFunction) {
		try {
			const {order, skip, take} = req.query as IQueryOrder
			const educationsList = await educationService.getAllEducations(order, skip, take)
			if (!educationsList) {
				res.status(httpStatus.NO_CONTENT).send('Content not found')
			}
			return res.status(httpStatus.OK).json(educationsList)
		} catch (error) {
			console.log(error)
		}
	},
	async addEducation(req: Request, res: Response, next: NextFunction) {
		try {
			const {order, skip, take} = req.query as IQueryOrder
			const educationList = await educationService.addNewEducation(req, order, skip, take)
			return res.status(httpStatus.OK).json(educationList)
		} catch (error) {
			console.log(error)
		}
	},
	async updateEducationById(req: Request, res: Response, next: NextFunction) {
		try {
			const {order, skip, take} = req.query as IQueryOrder
			const currentEducation = await educationService.findEducationById(req)
			if (!currentEducation) {
				return res.status(httpStatus.NOT_FOUND).send('Content not found')
			}
			const educationList = await educationService.updateEducationById(currentEducation.id, req.body.title, order, skip, take)
			return res.status(httpStatus.OK).json(educationList)
		} catch (error) {
			console.log(error)
		}
	},
	async deleteEducationById(req: Request, res: Response, next: NextFunction) {
		try {
			const {order, skip, take} = req.query as IQueryOrder
			if (!req.body.id.length) {
				return res.status(httpStatus.NOT_FOUND).json({message: 'Array must contain data'})
			}
			const deletedEducation = await educationService.deleteEducationById(req.body.id, order, skip, take)
			return res.status(httpStatus.OK).json(deletedEducation)
		} catch (error) {
			console.log(error)
		}
	},
	async findEducationUsagesByEmployee(req: Request, res: Response, next: NextFunction) {
		try {
			const educationUsagesList = await educationService.findEducationUsagesByEmployee(req.body.id)
			return res.status(httpStatus.OK).json(educationUsagesList)
		} catch (error) {
			console.log(error)
		}
	},
}

export default educationController
