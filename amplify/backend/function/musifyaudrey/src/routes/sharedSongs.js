const express = require("express");
const router = express.Router();

const sharedSong_controller = require("../controllers/sharedSongController");

// POST request for creating SharedSong.
router.post("/", sharedSong_controller.sharedSong_create);

// DELETE request to delete SharedSong.
router.delete("/:id", sharedSong_controller.sharedSong_delete);

// GET request for one SharedSong.
router.get("/:id", sharedSong_controller.sharedSong_detail);

// GET request for list of all SharedSong items.
router.get("/", sharedSong_controller.sharedSong_list);

module.exports = router;