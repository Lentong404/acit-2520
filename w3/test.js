const processInput = (userInput) => {
  const Output =
    "The distance between your two points: (" +
    userInput[0] +
    "," +
    userInput[1] +
    "), (" +
    userInput[2] +
    "," +
    userInput[3] +
    ") is " +
    helpers.distance(userInput[0], userInput[1], userInput[2], userInput[3]) +
    "\n";

  if (!fs.existsSync("./dataPoints")) {
    fs.mkdir("./dataPoints", (err) => {
      if (err) {
        return console.log(err);
      }
    });
  }

  fs.appendFile("./dataPoints/points.txt", Output, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Content Saved!");
    }
  });
};