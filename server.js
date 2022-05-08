const mongoose = require("mongoose");
const app = require("./app");
const DB_HOST =
  "mongodb+srv://Yaroslav:cEKY4nmhgzDaOlVA@cluster0.df9hs.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3038, () => {
      console.log("Server running. Use our API on port: 3038");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
