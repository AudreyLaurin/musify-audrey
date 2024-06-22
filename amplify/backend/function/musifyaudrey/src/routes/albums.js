const express = require("express");
const router = express.Router();

const album_controller = require("../controllers/albumController");

// POST request for creating Album.
router.post("/", album_controller.album_create);

// DELETE request to delete Album.
router.delete("/:id", album_controller.album_delete);

// PUT request to update Album.
router.put("/:id", album_controller.album_update);

// GET request for one Album.
router.get("/:id", album_controller.album_detail);

// GET request for list of all Album items.
router.get("/", album_controller.album_list);

module.exports = router;