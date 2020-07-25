const mongoose = require("mongoose");
const opts = { toJSON: { virtuals: true } };

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      {
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
          max: 600,
        },
        weight: {
          type: Number,
          max: 600,
        },
        reps: {
          type: Number,
          max: 600,
        },
        distance: {
          type: Number,
          max: 600,
        },
        sets: {
          type: Number,
          max: 600,
        },
      },
    ],
    totalDuration: {
      type: Number,
      default: 0,
    },
  },
  opts
);

// WorkoutSchema.virtual("totalDuration").get(function () {
//   return this.exercises.reduce(function (tot, exer) {
//     return tot + exer.duration;
//   });
// });
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
