const mongoose = require('mongoose')

let categorySchema = mongoose.Schema({
    name : {
        type : String,
        require: [true, 'Nama Ketegori harus diisi']
    }
}, { timestamps: true })

module.exports = mongoose.model('Category', categorySchema)