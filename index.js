const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

const app = express();

/** The process object provides information about, and control over, the current Node.js process.
 * The process object is an instance of EventEmitter.
 * The process.env property returns an object containing the user environment.
 * MONGO_URL is my secret key name
 */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is successful"))
  .catch((error) => console.log(error.message));

app.use(express.json()); // so we can pass any json file
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
