const fs = require("fs");

//# reading files
//* recive 2 argument // path // callback function

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   //* use toString() for convert Buffer data to string
//   console.log(data.toString());
// });

// console.log("last line");

//# writing files
//* recive 3 argument // path // text // callback function

fs.writeFile("./docs.blog1.txt", "hello, world!", () => {
  console.log("File was written");
});

//# directories

//# deleting files
