import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  // Autoriser Angular local à accéder
  res.setHeader("Access-Control-Allow-Origin", "*"); // * permet toutes les origines
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Répondre aux pré-vols CORS
    res.status(200).end();
    return;
  }

  try {
    const dbPath = path.join(__dirname, "../db.json");
    const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    res.status(200).json(db.foods);
  } catch (error) {
    res.status(500).json({ error: "Failed to read db.json", details: error.message });
  }
}