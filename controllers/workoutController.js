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
// router.get("/", (_, res) => {
//   // res.sendFile("index.html")
//   fs.readFile(`${filePath}index.html`, "utf8", (err, resp) => {
//     if (err) throw err;
//     else res.send(resp);
//   });
// });

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
//route 1
router.get("/api/workouts", (_, res) => {
  db.Workout.find({})
  // .populate("exercises")
    .then((dbWorkout) => {
      console.log(dbWorkout);
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//route 2
router.post("/api/workouts", async (req, res)=> {
  db.Workout.create({type: "workout"})
  .then((dbWorkout) => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
  });
})

//route 3
// router.put("/api/workouts/:id", ({body, params}, res) => {
//   // console.log(body, params)
//   const wkId = params.id;
//   let savEx = [];
      
// })

//route 4
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

module.exports = router;
