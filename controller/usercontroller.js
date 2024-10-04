// controllers/userController.js
import User from "../models/usermodel.js";

// Fetch all users
export const fetchUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("index", { users });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Render register form
export const renderRegisterForm = (req, res) => {
  res.render("register");
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

// Render edit form
export const renderEditForm = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("edit", { user });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user for editing" });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    await User.findByIdAndUpdate(req.params.id, { name, email, age });
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
