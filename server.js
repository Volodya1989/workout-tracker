const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }, { useUnifiedTopology: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// "/api/workouts"
app.get("/api/workouts", (_, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
          console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
// "/api/workouts/:id" 
app.get("/api/workouts/:id", (req, res) => {
    db.Workout.findOne({_id:req.params.id})
    .then(dbWorkout => {
        console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

// "/api/workouts/range"
// app.get("/api/workouts/range", (_, res) => {
//     db.Workout.find({})
//     .populate("seeds")
//       .then(dbWorkout => {
//           console.log(dbWorkout);
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });