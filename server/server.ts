import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
const app = express()
const PORT = process.env.PORT || 5005

app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
   res.send('test')
})

app.listen(PORT, (): void => console.log(`Server is running on PORT: ${PORT}`))
