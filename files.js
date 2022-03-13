const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  //* use toString() for convert Buffer data to string
  console.log(data.toString());
});

// writing files

// directories

// deleting files
