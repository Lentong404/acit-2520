// const squareRoot = (num) => return Math.sqrt(num);
// const square = (num) => num * num;

// module.exports = { squareRoot, square };

// const fs = require("node:fs");

// const getStory = (storyFile) => {
//   fs.readFile(storyFile, "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return data + " is the best story ever!";
//     }
//   });
// };

// const writeStory = (fileName, text) => {
//   fs.writeFile(fileName, text, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// };

// writeStory("story.txt", "The adventures of Tom Sawyer", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     getStory("story.txt", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

// const writeFileP = (file, content) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, content, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log();
//       }
//     });
//   });
// };

// writeFileP("someFile.txt", "hi")
//   .then(() => console.log("operation complete"))
//   .catch((err) => console.log(err));

// const fs = require("node:fs");



// fs.writeFile("myFile.txt", "some content", (err) => {
//   if (err) return console.log(err);
// });

// fs.readFile("myFile.txt", (err, data) => {
//   if (err) return console.log(err);
//   console.log(data);
// });

const { argv } = require("node:process");

const sum = (n1, n2) => {
  return n1 + n2;
}

// Run: node app.js 10 5 2 3
const x1 = argv[2];
const y1 = argv[3];
const x2 = argv[4];
const y2 = argv[5];

console.log(sum(x1, y1));