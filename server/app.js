const express = require("express");

// # Express app
const app = express();


// # Register view engine


app.set('view engine', 'ejs')



// # Listen for requests
app.listen(3000);

// * Get 2 argument => path // calback function

app.get("/", (req, res) => {
  // res.send("<p>home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("<p>about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// * Redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// * 404 page

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
