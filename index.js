import express from "express";
import sum from "./sum.js";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  const result = sum(Number(a), Number(b));
  res.send(`The sum of ${a} and ${b} is ${result}`);
});
