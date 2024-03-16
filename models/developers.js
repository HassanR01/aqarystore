import mongoose, { Schema } from "mongoose";

const developerSchema = new Schema({
    name: String,
    description: String,
    projects: [{
        name: String
    }],
    properties: [{
        name: String
    }],

    visitors: Number,
})

const Developer = mongoose.models.Developer || mongoose.model('Developer', developerSchema)

export default Developer;