const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const TransSchema = new Schema({
    prod_id: String,
    bayer_id: String,
    quantity: Number,
    price: Number,
    done: Boolean,
    time: String,
    hash: String,
});

mongoose.model('Trans', TransSchema);
