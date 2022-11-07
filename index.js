const express = require("express");
const dotenv = require("dotenv");
// const path = require("path");
const { sequelize } = require("./models");
// import rootRouter from "./routers";
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
app.use(express.json());

// const publicPath = path.join(__dirname, "./public");
// app.use("/public", express.static(publicPath));
// app.use("/api/v1", rootRouter);

app.listen(process.env.PORT || 5001, async () => {
  console.log("App listening on http://localhost:5000");
  try {
    await sequelize.authenticate();
    console.log("Connection database successfully");
  } catch (error) {
    console.log("Unable to connect to database");
  }
});
