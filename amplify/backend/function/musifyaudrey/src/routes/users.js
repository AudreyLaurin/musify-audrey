const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

// POST request for creating User.
router.post("/", user_controller.user_create);

// DELETE request to delete User.
router.delete("/:id", user_controller.user_delete);

// PUT request to update User.
router.put("/:id", user_controller.user_update);

// GET request for one User.
router.get("/:id", user_controller.user_detail);

// GET request for list of all User items.
router.get("/", user_controller.user_list);

module.exports = router;