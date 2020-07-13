const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/recipe-book", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));
