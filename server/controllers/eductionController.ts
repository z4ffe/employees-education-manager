import {NextFunction, Request, Response} from 'express'

const eductionController = {
   async addEducation(req: Request, res: Response, next: NextFunction) {
      try {
         return res.send('edu created')
      } catch (error) {
         console.log(error)
      }
   },
}

export default eductionController
