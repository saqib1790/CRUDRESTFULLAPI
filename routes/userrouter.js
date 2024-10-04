// routes/userRoutes.js
import express from "express";
const router = express.Router();
import {
  fetchUsers,
  renderRegisterForm,
  createUser,
  renderEditForm,
  updateUser,
  deleteUser,
} from "../controller/usercontroller.js";

// Get all users and render index page
router.get("/", fetchUsers);

// Render register form
router.get("/register", renderRegisterForm);

// Create a new user
router.post("/register", createUser);

// Render edit form
router.get("/edit/:id", renderEditForm);

// Update a user
router.put("/edit/:id", updateUser);

// Delete a user
router.delete("/delete/:id", deleteUser);

export default router;
