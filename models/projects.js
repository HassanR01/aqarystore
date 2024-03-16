import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    title: String,
    category: String,
    startBudget: Number,
    description: String,
    developer: String,
    zone: String,
    
    visitors: Number,
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)

export default Project;