const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.userSong_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetUserSong($id: ID!) {
            getUserSong(id: $id) {
                id
                songId
                userId
                }
            }`, "getUserSong", {id: req.params.id}, req, res);
});


// Handle userUserSong create on POST.
exports.userSong_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateUserSong(
        $songId: ID!
        $userId: ID!
      ) {
      createUserSong(input: {songId: $songId, userId: $userId}) {
        id
      }
    }
    `, "createUserSong", {...req.body}, req, res)
});

exports.userSong_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query ListUserSongs{
              listUserSongs {
                items {
                id
                songId
                userId
              }
              }
              }
    `, "listUserSongs", {}, req, res)
})

exports.userSong_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation DeleteUserSong($id: ID!) {
            deleteUserSong(input: {id: $id}) {
                id
            }
        }`, "deleteUserSong", {id: req.params.id}, req, res);
})