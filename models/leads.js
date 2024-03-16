import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema({
    name: String,
    phone: Number,
    method: String,
    property: String,
    zone: String,
    maxBudget: Number,
    minBudget: Number,
})

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema)

export default Lead;