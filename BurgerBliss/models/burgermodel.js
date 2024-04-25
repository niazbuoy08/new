const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
    name: {
        type: String,
        require
    },
    variants: [],
    prices: [],
    category: {
        type: String,
        require
    },
    image: {
        type: String,
        require
    },
    description: {
        type: String,
        require
    }
}, {
    timestamps: true,
})

const burgermodel = mongoose.model('burgers', burgerSchema);

module.exports = burgermodel
