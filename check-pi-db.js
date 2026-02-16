import Database from "better-sqlite3";

const piDb = new Database("pi-app.db");

const items = piDb.prepare("SELECT pi FROM items").all();

console.log(items);

piDb.close();