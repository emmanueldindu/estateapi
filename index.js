const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors');
const mongoose = require("mongoose")
const productRouter = require('./routes/products')
// const cors = require('cors')


app.use(cors());
const port = 5000
dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(
    () => console.log('connected to database'))
    .catch((err) => console.log(err))





app.use(express.json({limit: '10mb'}))
app.use(express.urlencoded({ limit: '10mb', extended: true }))


app.use('/api/products', productRouter)
app.listen(process.env.PORT || port, () => console.log(`Estate API listening on port ${port}!`))