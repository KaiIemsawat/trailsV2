const mongoose = require("mongoose");
// example model with validation
const TrailModel = new mongoose.Schema(
    {
        trailName: {
            type: String,
            required: [true, "Trail name is required"],
            minLength: [2, "The name must be 2 or more characters"],
            maxLength: [50, "The name can't be over 50 characters"],
        },
        distance: {
            type: Number,
            required: [true, "Distance is required"],
            min: [1, "No trail shorter than 1 mile allowed"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
            minLength: [3, "The description must be 3 or more characters"],
            maxLength: [500, "The description can't be over 500 characters"],
        },
        location: {
            type: String,
            required: [true, "Location is required"],
            minLength: [3, "The location must be 3 or more characters"],
            maxLength: [100, "The location can't be over 100 characters"],
        },
        difficalty: {
            type: Number,
        },
        wheelchairAccess: {
            type: Boolean,
            required: [true, "Wheelchair accessibility is required"],
        },
        image: {
            type: String,
        },
    },
    // { timestamps: true } will create timestamp, of course
    { timestamps: true }
);

const Trail = mongoose.model("Trail", TrailModel);

module.exports = Trail;
