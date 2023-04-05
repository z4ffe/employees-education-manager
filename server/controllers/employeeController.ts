import {NextFunction, Request, Response} from 'express'


const employeeController = {
   async createNewEmployee(req: Request, res: Response, next: NextFunction) {
      try {
         return res.send('employee created')
      } catch (error) {
         console.log(error)
      }
   }
}

export default employeeController
