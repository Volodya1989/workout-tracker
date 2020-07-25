const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./../public/");
const router = express.Router();
const db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// view routes
router.get("/", (_, res) => {
  fs.readFile(`${filePath}index.html`, "utf8", (err, resp) => {
    if (err) throw err;
    else res.send(resp);
  });
});

router.get("/stats", (_, res) => {
  fs.readFile(`${filePath}stats.html`, "utf8", (err, resp) => {
    if (err) throw err;
    else res.send(resp);
  });
});

router.get("/exercise", (_, res) => {
  fs.readFile(`${filePath}exercise.html`, "utf8", (err, resp) => {
    if (err) throw err;
    else res.send(resp);
  });
});

// "/api/workouts"
// ==========================================
router.get("/api/workouts", (_, res) => {
  db.Workout.find({})
  .populate("exercises")
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/api/workouts/range", (_, res) => {
  db.Workout.find({})
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});


// "/api/workouts/:id"
router.post("/api/workouts/:id", ({ body }, res) => {
  db.Workout.create(body)
  .then(({ _id }) => db.Exercise.findOneAndUpdate({}, { $push: { exercises: _id }}, { new: true }))
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;
