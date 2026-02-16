import Database from "better-sqlite3";

const piDb2 = new Database("pi-app-2.db");

// Create the table if it does not exist.
piDb2.prepare(`
    CREATE TABLE IF NOT EXISTS items (
    pi TEXT NOT NULL
    )
`).run();

// Seed the table only if it is empty.
const row = piDb2.prepare("SELECT COUNT(*) AS n FROM items").get();

if (row.n === 0) {
const insert = piDb2.prepare("INSERT INTO items (pi) VALUES (?)");
    insert.run("3.14159");

console.log("Seeded items table.");
} else {
    console.log("Items table already populated.");
    }

piDb2.close();