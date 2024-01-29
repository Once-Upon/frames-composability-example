import express from "express";

const app = express();
const port = process.env.PORT || 3000;

import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "static/home.html");

const pokeFrame = path.join(__dirname, "static/PokeFrame.html");
const yoink = path.join(__dirname, "static/Yoink.html");
const tenet = path.join(__dirname, "static/Tenet.html");

// TODO: Pick fourth frame
const todo = path.join(__dirname, "static/Todo.html");

const home = fs.readFileSync(filePath, { encoding: "utf-8" });

app.get("/", (req, res) => {
  res.send(home);
});

app.post("/", (req, res) => {
  if (req.body.untrustedData.buttonIndex === 1) {
    res.send(pokeFrame);
  } else if (req.body.untrustedData.buttonIndex === 2) {
    res.send(yoink);
  } else if (req.body.untrustedData.buttonIndex === 3) {
    res.send(tenet);
  } else if (req.body.untrustedData.buttonIndex === 4) {
    res.send(todo);
  } else {
    // Respond with an error
    res.send("Error");
  }
});

// TODO: Add post support at root

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
