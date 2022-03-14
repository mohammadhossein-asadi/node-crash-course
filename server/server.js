const http = require("http");
const fs = require("fs");

// * createServer // recive one parameter => callback function
// * in callback funcion recive two parameter => (req, res)
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //   * set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./server/views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      // set statusCode
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // * Redirect page
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "./about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // # send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data); // For use multiple things
      req.statusCode = res.end(data); // If we have something, we use it directly
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
