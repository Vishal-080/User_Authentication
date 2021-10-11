const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("product", productSchema); // products