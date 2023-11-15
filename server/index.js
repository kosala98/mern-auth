const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

const app = express();

//DB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

//Middleware
app.use(express.json());
app.use();

app.use("/", require("./routes/authRoute"));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is runnng on port ${port}`);
});
