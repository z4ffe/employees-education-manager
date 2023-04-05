import * as express from 'express'
import eductionController from '../controllers/eductionController'
const router = express.Router()

router.route('/add').post(eductionController.addEducation)

export default router


