import cors from 'cors'
import 'dotenv/config.js'
import express from 'express'
import httpStatus from 'http-status'
import db from './db'

//

const app = express()
const PORT = process.env.PORT || 5005

//

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//

app.get('/health', (req, res) => {
   res.status(httpStatus.OK).send('works')
})

//

db()
app.listen(PORT, (): void => console.log(`Server is running on PORT: ${PORT}`))
