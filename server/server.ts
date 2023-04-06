import express from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import 'dotenv/config.js'
import db from './db'
import router from './routes'

//

const app = express()
const PORT = process.env.PORT || 5005

//

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//

app.use('/', router)
app.get('/health', (req, res) => {
   res.status(httpStatus.OK).send('works')
})

//

const main = async (): Promise<void> => {
   try {
      await db.initialize()
      console.log(`PostgreSQL Connected`)
      await app.listen(PORT, (): void => console.log(`Server is running on PORT: ${PORT}`))
   } catch (error) {
      console.log(error)
   }
}

main()
