import DBDataSource from '../db'

const getAllEducations = async () => {
   const educationRepository = await DBDataSource.getRepository('education')
   return await educationRepository.find()
}

export default {getAllEducations}
