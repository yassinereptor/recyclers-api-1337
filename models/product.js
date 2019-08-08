const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const ProductSchema = new Schema({
    user_id: String,
    user_name: String,
    title: String, 
    desc: String,
    unit: Number,
    cat: Number,
    price: Number,
    min_price: Number,
    max_price: Number,
    quantity: Number,
    quality: Number,
    min_quality: Number,
    max_quality: Number,
    fix: Boolean,
    bid: Boolean,
    images: Array,
    bid_list: Array,
    time: String,
    lat: String,
    lng: String,
    pos: String,
    views: Array,
    offer: Boolean
});

mongoose.model('Product', ProductSchema);
