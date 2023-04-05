import {createConnection} from 'typeorm'
import Education from './entities/education'
import Employee from './entities/employee'

//

const PORT = Number(process.env.DB_PORT)
const USER = process.env.DB_USER
const HOST = process.env.DB_HOST
const NAME = process.env.DB_NAME
const PASSWORD = process.env.DB_PW

//

const db = async (): Promise<void> => {
   try {
      await createConnection({
         type: 'postgres',
         host: HOST,
         port: PORT,
         username: USER,
         password: PASSWORD,
         database: NAME,
         entities: [Employee, Education],
         synchronize: true
      })
      console.log('Postgres Connected')
   } catch (error) {
      console.log(error)
      throw new Error('Postgres Connection Failed')
   }
}

export default db
