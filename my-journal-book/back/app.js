const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Journal Book");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is successfuly listening at port", PORT);
  } else {
    console.error("An error occurred: ", error);
  }
});
