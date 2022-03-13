const fs = require("fs");

//# reading files
//* recive 2 parameter // path // callback function

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   //* use toString() for convert Buffer data to string
//   console.log(data.toString());
// });

// console.log("last line");

//# writing files
//* recive 3 parameter // path // text // callback function

// fs.writeFile("./docs/blog1.txt", "hello, world!", () => {
//   console.log("File was written ;)");
// });

// //* This part of the file does not exist and is created

// fs.writeFile("./docs/blog2.txt", "hello, friend!", () => {
//   console.log("File was written ;)");
// });

// * If there is a file, the text is written and if there is no file, a new file is created and the text is written

//# directories
// * create directorie
// * recive 2 parameter // path // callback function

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

//# deleting files

// if (fs.existsSync("./docs/deleteme.txt")) {
//   // * unlink recive 2 parameter
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
