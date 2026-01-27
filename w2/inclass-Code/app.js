const helpers = require("./helpers");
const process = require("process");
const userTemp = process.argv[2];

if (userTemp.endsWith("c")) {
  console.log(helpers.cToF(userTemp));
} else {
  console.log(helpers.fToC(userTemp));
}
