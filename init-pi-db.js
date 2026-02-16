import Database from "better-sqlite3";

const piDb = new Database("pi-app.db");

// Create the table if it does not exist.
piDb.prepare(`
    CREATE TABLE IF NOT EXISTS items (
    pi TEXT NOT NULL
    )
`).run();

// Seed the table only if it is empty.
const row = piDb.prepare("SELECT COUNT(*) AS n FROM items").get();

if (row.n === 0) {
const insert = piDb.prepare("INSERT INTO items pi VALUES ?");
    insert.run(3.14159);

console.log("Seeded items table.");
} else {
    console.log("Items table already populated.");
    }

piDb.close();