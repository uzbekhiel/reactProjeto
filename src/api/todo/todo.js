const restful = require('node-restful')
const mongoose = restful.mongoose

const todoShema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.Now }
})

module.exports = restful.model('Todo', todoShema)