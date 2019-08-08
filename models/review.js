const mongoose = require('mongoose');

const {
    Schema
} = mongoose;

const ReviewSchema = new Schema({
    post_user_id: String,
    user_id: String,
    post_id: String,
    user_name: String,
    text: String,
    profile: String,
    rate: Number
});

mongoose.model('Review', ReviewSchema);