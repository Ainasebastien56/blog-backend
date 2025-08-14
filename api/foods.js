import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// Récupérer le dossier actuel de ce fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function handler(req, res) {
  // Construire le chemin vers db.json à la racine
  const dbPath = path.join(__dirname, "../db.json");
  
  // Lire le fichier
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  res.status(200).json(db.foods);
}