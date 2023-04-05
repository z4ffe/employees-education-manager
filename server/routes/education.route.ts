import * as express from 'express'
import eductionController from '../controllers/eductionController'
const router = express.Router()

router.route('')
   .get(eductionController.getAllEducations)
   .post(eductionController.addEducation)

export default router


