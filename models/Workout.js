const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    require: "Type is Required",
  },
  name: {
    type: String,
    trim: true,
    require: "Name is Required",
  },
  duration: {
    type: Number,
    min: 1,
    max: 600,
  },
  weight: {
    type: Number,
    min: 1,
    max: 600,
  },
  reps: {
    type: Number,
    min: 1,
    max: 600,
  },
  sets: {
    type: Number,
    min: 1,
    max: 600,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports=Workout;