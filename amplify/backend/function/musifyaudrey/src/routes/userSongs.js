const express = require("express");
const router = express.Router();

const userSong_controller = require("../controllers/userSongController");

// POST request for creating UserSong.
router.post("/", userSong_controller.userSong_create);

// DELETE request to delete UserSong.
router.delete("/:id", userSong_controller.userSong_delete);

// GET request for one UserSong.
router.get("/:id", userSong_controller.userSong_detail);

// GET request for list of all UserSong items.
router.get("/", userSong_controller.userSong_list);

module.exports = router;