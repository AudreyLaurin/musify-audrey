const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.song_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetSong($id: ID!) {
            getSong(id: $id) {
                id
                userSongsId
                albumSongsId
                key
                title
                language
              }
            }`, "getSong", {id: req.params.id}, req, res);
});


// Handle song create on POST.
exports.song_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateSong(
        $userSongsId: ID!
        $albumSongsId: ID!
        $key: String!
        $title: String!
        $language: String
      ) {
      createSong(input: {userSongsId: $userSongsId, albumSongsId: $albumSongsId, key: $key, title: $title, language: $language}) {
        id
        userSongsId
        albumSongsId
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
                userSongsId
                albumSongsId
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
        $albumSongsId: ID
        $language: String
        ) {
            updateSong(input: {id: $id, key: $key, title: $title, albumSongsId: $albumSongsId, language: $language}) {
            id
            key
            title
            albumSongsId
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