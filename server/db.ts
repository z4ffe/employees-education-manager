import {DataSource} from 'typeorm'
import Education from './entities/education'
import Employee from './entities/employee'

//

const PORT = Number(process.env.DB_PORT)
const USER = process.env.DB_USER
const HOST = process.env.DB_HOST
const NAME = process.env.DB_NAME
const PASSWORD = process.env.DB_PW

//

const DBDataSource = new DataSource({
   type: 'postgres',
   host: HOST,
   port: PORT,
   username: USER,
   password: PASSWORD,
   database: NAME,
   entities: [Employee, Education],
   synchronize: false
})

export default DBDataSource
