const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors');
const mongoose = require("mongoose")
const productRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const cartRouter = require('./routes/cart')
const OrderRouter = require('./routes/order')
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
app.use('/api/', authRouter)
app.use('api/users', userRouter)
app.use('/api/cart', cartRouter)
app.use('api/orders', OrderRouter)

app.listen(process.env.PORT || port, () => console.log(`Estate API listening on port ${port}!`))