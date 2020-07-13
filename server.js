const express = require("express");
const port = process.env.PORT || 3786;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./config/routes");
const mongoose = require("./config/database");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
app.use("/", router);

app.listen(port, () => console.log("server has started......:)"));
