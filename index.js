const express = require("express");
const { searchMovies } = require("./api");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("hi");
  res.send("Hello World!");
});

// if the user searches for a movie and provides a query, we pass the query to the api
app.get("/search/:query", async (req, res) => {
  console.log("hello");
  const query = req.params.query;
  const data = await searchMovies(query);
  if (data) {
    res.json(data);
  } else {
    res.status(404).send("Resource not found");
  }
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Example app listening on port ${PORT}!`)
);
