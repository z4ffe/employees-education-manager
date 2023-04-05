import {NextFunction, Request, Response} from 'express'
import httpStatus from 'http-status'
import DBDataSource from '../db'
import educationService from '../services/education.service'

const eductionController = {
   async addEducation(req: Request, res: Response, next: NextFunction) {
      try {
         return res.send('edu created')
      } catch (error) {
         console.log(error)
      }
   },
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
   }
}

export default eductionController
