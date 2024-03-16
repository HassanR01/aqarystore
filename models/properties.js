import mongoose, { Schema, mongo } from "mongoose";

const propertySchema = new Schema({
    title: String,
    category: String,
    bathrooms: Number,
    bedrooms: Number,
    area: Number,
    startBudget: Number,
    zone: String,
    developer: String,

    visitors: Number,
})

const Property = mongoose.models.Property || mongoose.model("Property", propertySchema)

export default Property;