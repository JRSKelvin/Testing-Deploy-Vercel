const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const forgetPasswordSchema = new Schema({
    username:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    email:{type: String, required: true},
    admin:{type: String, required: true},
    questionrecovery:{type: String, required: true},
    answerrecovery:{type: String, required: true},
}, {
    timestamps: true.valueOf,
});

const forgetPassword = mongoose.model('user', forgetPasswordSchema);

module.exports = forgetPassword;