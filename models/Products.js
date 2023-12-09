const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rooms: {
        type: String,
        required: true,
    },
    toilet: {
        type: String,
        required: true,
    },

    sqft: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    // timeStamps: {
    //     // type: String,
    //     required: true,
    // },
})


module.exports = mongoose.model("Product", ProductSchema)

