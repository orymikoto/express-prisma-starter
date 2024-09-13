import express from "express";

const router = express.Router();

// Get all users data
router.route("/").get();

// Get user data by id
router.route("/:id").get();

// Create new user
router.route("/create").post();

// Update user by id
router.route("/update/:id").patch();

// Delete user by id
router.route("/delete/:id").delete();
