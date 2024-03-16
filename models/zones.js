import mongoose, { Schema } from "mongoose"

const zoneSchema = new Schema({
    name: String,
    developers: [{
        name: String,
    }],
    projects: [{
        name: String,
    }],
    properties: [{
        name: String,
    }],
}, { timestamps })

const Zone = mongoose.models.Zone || mongoose.model('Zone', zoneSchema)

export default Zone;