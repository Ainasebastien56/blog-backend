import express from 'express';
import cors from 'cors'
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Lire db.json
const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));

// Route pour renvoyer toutes les foods
app.get("/foods", (req, res) => {
  res.json(db.foods);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});