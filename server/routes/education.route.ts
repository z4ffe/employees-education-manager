import * as express from 'express'
import educationController from '../controllers/education.controller'

const router = express.Router()

router.route('')
	.get(educationController.getAllEducations)
	.post(educationController.addEducation)
	.patch(educationController.updateEducationById)
	.delete(educationController.deleteEducationById)

router.route('/usage')
	.post(educationController.findEducationUsagesByEmployee)

export default router


