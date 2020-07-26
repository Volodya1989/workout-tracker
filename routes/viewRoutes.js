const path = require("path");
const filePath = path.join(__dirname, "./../public/");
module.exports = (app) => {
  //view route #1
  // this route is responsible for homepage
  app.get("/", (_, res) => {
    res.sendFile(`${filePath}index.html`, (err, _) => {
      if (err) throw err;
    });
  });
  //view route #2
  // this route is responsible for showing all stats to the user
  app.get("/stats", (_, res) => {
    res.sendFile(`${filePath}stats.html`, (err, _) => {
      if (err) throw err;
    });
  });
  //view route #2
  // this route is responsible for showing page where user can add new exercise
  app.get("/exercise", (_, res) => {
    res.sendFile(`${filePath}exercise.html`, (err, _) => {
      if (err) throw err;
    });
  });
};
