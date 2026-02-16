import Database from "better-sqlite3";

const piDb2 = new Database("pi-app-2.db");

const items = piDb2.prepare("SELECT pi FROM items").all();

console.log(items);

piDb2.close();