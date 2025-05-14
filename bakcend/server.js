import express from 'express'
import cors from 'cors'
import { connectDB } from './config/config.js'
import router from './router/router.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors('*'))
app.use('/products', router)

connectDB()

app.listen(5000, () => {
    console.log('backend running');
})          