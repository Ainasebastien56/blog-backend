import fs from "fs";

export default function handler(req, res) {
  const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  res.status(200).json(db.foods);
}