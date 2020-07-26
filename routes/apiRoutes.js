const db = require("../models");

module.exports = (app) => {
  //api route #1
  //this route gets the last workout user had
  app.get("/api/workouts", (_, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //api route #2
  //this route creates new workout for user
  app.post("/api/workouts", (_, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //api route #3
  //this route updates existing workout by adding new exercise
  app.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    db.Workout.findByIdAndUpdate(
      { _id: id },
      {
        $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //api route #4
  //this route gets all workout in range
  app.get("/api/workouts/range", (_, res) => {
    db.Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
