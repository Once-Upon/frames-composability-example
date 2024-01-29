import express from "express";

const app = express();
const port = process.env.PORT || 3000;

import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "static/home.html");

const pokeFrameFilePath = path.join(__dirname, "static/PokeFrame.html");
const yoinkFilePath = path.join(__dirname, "static/Yoink.html");
const tenetFilePath = path.join(__dirname, "static/Tenet.html");

// TODO: Pick fourth frame
const todoFilePath = path.join(__dirname, "static/Todo.html");

const home = fs.readFileSync(filePath, { encoding: "utf-8" });

const pokeFrame = fs.readFileSync(pokeFrameFilePath, { encoding: "utf-8" });
const yoink = fs.readFileSync(yoinkFilePath, { encoding: "utf-8" });
const tenet = fs.readFileSync(tenetFilePath, { encoding: "utf-8" });
const todo = fs.readFileSync(todoFilePath, { encoding: "utf-8" });

app.use(express.json());

app.get("/", (req, res) => {
  res.send(home);
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log("body", body);
  const buttonIndex = body?.untrustedData?.buttonIndex;
  console.log("buttonIndex", buttonIndex);
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
