import mongoose from "mongoose"; // ✅ fixed 'mangoose' → 'mongoose'

const Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // ✅ fixed 'defualt' → 'default', removed () so it's a function ref
    }
})

const EmailModel = mongoose.models.email || mongoose.model('email', Schema); // ✅ fixed 'emial' → 'email'
export default EmailModel;