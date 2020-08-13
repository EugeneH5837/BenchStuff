const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const data = require("./data/data.json");

const app = express();
const PORT = 3000;

//for public folder on path /
app.use(express.static("public"));

//method to use json
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Proxies
app.set("trust proxy", "loopback");

//for images folder on path images
app.use("/images", express.static("images"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

app.post("/newItem", (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/", (req, res, next) => {
  res.json(data);
});

app.get(
  "/item/:id",
  (req, res, next) => {
    // throw new Error();
    //thhis is the middleware that pulls the data
    console.log(req.params.id);
    let user = Number(req.params.id);
    console.log(user);
    console.log(data[user]);
    // middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`);
    console.log(`Request type: ${req.method}`);
    //everything above is middleware
    res.send(data[user]);
    next();
  },
  (req, res, next) => {
    console.log("Did you get the right data?");
  }
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Red alert: ${err.stack}`);
  // next();
});

app
  .route("/item")
  .get((req, res, next) => {
    // res.download("images/rocket.jpg");
    res.send(`a get request with /item route on port ${PORT}`);
    // res.redirect("/");
  })
  .put((req, res, next) => {
    res.send(`a put request with /newItem route on port ${PORT}`);
  })
  .delete((req, res, next) => {
    res.send(`a delete request with /item route on port ${PORT}`);
  });

app.listen(PORT, () => {
  // console.log(`Your server is running on port ${PORT}`);
  // console.log(data);
});
