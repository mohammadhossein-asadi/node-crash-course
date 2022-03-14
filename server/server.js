const http = require("http");
const fs = require("fs");

// * createServer // recive one parameter => callback function
// * in callback funcion recive two parameter => (req, res)
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //   * set header content type
  res.setHeader("Content-Type", "text/html");

  // # send an html file
  fs.readFile("./server/views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
    //   res.write(data); // For use multiple things
      res.end(data); // If we have something, we use it directly
    }
  });

  //   res.write("<p>hello, mohammad</p>");
  //   res.write("<p>hello again, mohammad</p>");
  //   res.end();
});

// * recive three parameter // port // domain name // callback funcion
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
