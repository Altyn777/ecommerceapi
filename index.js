const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

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

app.use(cors());
app.use(express.json()); // so we can pass any json file
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
