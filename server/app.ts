import cors from 'cors'
import 'dotenv/config.js'
import express from 'express'
import httpStatus from 'http-status'
import db from './db'
import initDataBase from './db.init'
import router from './routes'

//

const app = express()
const PORT = process.env.PORT || 5005

//

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//

app.use('/api', router)
app.get('/health', (req, res) => {
	res.status(httpStatus.OK).send('works')
})

//

const main = async (): Promise<void> => {
	try {
		await db.initialize()
		console.log(`PostgreSQL Connected`)
		await initDataBase()
		await app.listen(PORT, (): void => console.log(`Server is running on PORT: ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

main()
