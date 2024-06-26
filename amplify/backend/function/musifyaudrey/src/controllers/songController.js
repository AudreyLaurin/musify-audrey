const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.song_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetSong($id: ID!) {
            getSong(id: $id) {
                id
                userID
                albumID
                key
                title
                language
              }
            }`, "getSong", {id: req.params.id}, req, res);
});


// Handle song create on POST.
exports.song_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateSong(
        $userID: ID!
        $albumID: ID!
        $key: String!
        $title: String!
        $language: String
      ) {
      createSong(input: {userID: $userID, albumID: $albumID, key: $key, title: $title, language: $language}) {
        id
        userID
        albumID
        key
        title
        language
      }
    }
    `, "createSong", {...req.body}, req, res)
});

exports.song_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query ListSongs{
              listSongs {
                items {
                id
                userID
                albumID
                key
                title
                language
              }
            }
            }
    `, "listSongs", {}, req, res)
})

exports.song_update = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation UpdateSong(
        $id: ID!
        $key: String
        $title: String
        $albumID: ID
        $language: String
        ) {
            updateSong(input: {id: $id, key: $key, title: $title, albumID: $albumID, language: $language}) {
            id
            key
            title
            albumID
            language
          }
        }`, "updateSong", {
        id: req.params.id, ...req.body
    }, req, res);
})

exports.song_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation DeleteSong($id: ID!) {
            deleteSong(input: {id: $id}) {
                id
            }
        }`, "deleteSong", {id: req.params.id}, req, res);
})