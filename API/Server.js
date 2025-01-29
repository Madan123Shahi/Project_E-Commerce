const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI);
app.use(
  cors({
    origin: "http://localhost:5174/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected Successfully at ${process.env.MONGO_URI}`);
    try {
      app.listen(PORT, () => {
        console.log(
          `Server is running Successfully at PORT ${process.env.PORT} `
        );
      });
    } catch (error) {
      console.error(
        `Error while connecting to App at PORT ${process.env.PORT},`,
        error
      );
    }
  } catch (error) {
    console.error(
      `Error while connecting to Database at ${process.env.MONGO_URI}`,
      error
    );
  }
};

start();
