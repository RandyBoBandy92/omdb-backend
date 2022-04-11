const express = require("express");
const cors = require("cors");
const { searchMovies } = require("./api");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the OMDB-Backend API",
    howToUse: "/search/<query>/<page>",
  });
});

// if the user searches for a movie and provides a query, we pass the query to the api
app.get("/search/:query/:page", async (req, res) => {
  const { query, page } = req.params;
  const data = await searchMovies(query, page);
  if (data) {
    res.json(data);
  } else {
    res.status(404).send("Resource not found");
  }
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
