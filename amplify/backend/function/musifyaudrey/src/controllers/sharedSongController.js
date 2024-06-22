const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.sharedSong_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetSharedSong($id: ID!) {
            getSharedSong(id: $id) {
                id
                songId
                userSharedSongsId
                }
            }`, "getSharedSong", {id: req.params.id}, req, res);
});


// Handle sharedSharedSong create on POST.
exports.sharedSong_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateSharedSong(
        $songId: ID!
        $userSharedSongsId: ID!
      ) {
      createSharedSong(input: {songId: $songId, userSharedSongsId: $userSharedSongsId}) {
        id
      }
    }
    `, "createSharedSong", {...req.body}, req, res)
});

exports.sharedSong_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query ListSharedSongs{
              listSharedSongs {
                items {
                id
                songId
                userSharedSongsId
              }
              }
              }
    `, "listSharedSongs", {}, req, res)
})

exports.sharedSong_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation DeleteSharedSong($id: ID!) {
            deleteSharedSong(input: {id: $id}) {
                id
            }
        }`, "deleteSharedSong", {id: req.params.id}, req, res);
})