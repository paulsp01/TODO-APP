const mongoose = require("mongoose");

const uri =
  "mongodb+srv://swarnalee1:Sp123@cluster0.mwwf0dx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
