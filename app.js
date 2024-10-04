// app.js
import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import connectDB from "./database.js";
import userRoutes from "./routes/userrouter.js";
const app = express();
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride("_method")); // Allows PUT and DELETE methods through forms

// Set view engine
app.set("view engine", "ejs");

// Connect to MongoDB
connectDB();

// Use routes
app.use("/", userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
