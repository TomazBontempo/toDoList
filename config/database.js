// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await (
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
  ).isObjectIdOrHexString(console.log("MongoDB connected"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
