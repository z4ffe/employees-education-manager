import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import educationService from '../services/education.service'

const educationController = {
   async getAllEducations(req: Request, res: Response, next: NextFunction) {
      try {
         const educationsList = await educationService.getAllEducations()
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
         const newEducation = await educationService.addNewEducation(req)
         return res.status(httpStatus.OK).json({message: 'created', newEducation})
      } catch (error) {
         console.log(error)
      }
   },
   async updateEducationById(req: Request, res: Response, next: NextFunction) {
      try {
         const currentEducation = await educationService.findEducationById(req)
         if (!currentEducation) {
            return res.status(httpStatus.NOT_FOUND).send('Content not found')
         }
         const updatedEducation = await educationService.updateEducationById(currentEducation.id, req.body.title)
         return res.status(httpStatus.OK).json({message: 'updated', updatedEducation})
      } catch (error) {
         console.log(error)
      }
   },
   async deleteEducationById(req: Request, res: Response, next: NextFunction) {
      try {
         const currentEducation = await educationService.findEducationById(req)
         if (!currentEducation) {
            return res.status(httpStatus.NOT_FOUND).send('Content not found')
         }
         const deletedEducation = await educationService.deleteEducationById(currentEducation.id)
         return res.status(httpStatus.OK).json({message: 'deleted', currentEducation})
      } catch (error) {
         console.log(error)
      }
   },
}

export default educationController
