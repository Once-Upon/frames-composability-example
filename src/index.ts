import express from "express";

const app = express();
const port = process.env.PORT || 3000;

import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "static/home.html");

const onceUponFilePath = path.join(__dirname, "static/OnceUpon.html");
const yoinkFilePath = path.join(__dirname, "static/Yoink.html");
const tenetFilePath = path.join(__dirname, "static/Tenet.html");
const leetBriansFilePath = path.join(__dirname, "static/LeetBrians.html");

const home = fs.readFileSync(filePath, { encoding: "utf-8" });

const onceUpon = fs.readFileSync(onceUponFilePath, { encoding: "utf-8" });
const yoink = fs.readFileSync(yoinkFilePath, { encoding: "utf-8" });
const tenet = fs.readFileSync(tenetFilePath, { encoding: "utf-8" });
const leetBrians = fs.readFileSync(leetBriansFilePath, {
  encoding: "utf-8",
});

app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.send(home);
});

app.post("/", (req, res) => {
  const body = req.body;
  console.log("body", body);
  const buttonIndex = body?.untrustedData?.buttonIndex;
  console.log("buttonIndex", buttonIndex);
  if (req.body.untrustedData.buttonIndex === 1) {
    res.send(onceUpon);
  } else if (req.body.untrustedData.buttonIndex === 2) {
    res.send(yoink);
  } else if (req.body.untrustedData.buttonIndex === 3) {
    res.send(tenet);
  } else if (req.body.untrustedData.buttonIndex === 4) {
    res.send(leetBrians);
  } else {
    // Respond with an error
    res.send("Error");
  }
});

// TODO: Add post support at root

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
