const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.song_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetSong($id: ID!) {
            getSong(id: $id) {
                id
                key
                title
                uploader {
                  id
                  userId
                  username
                }
                album {
                  id
                  artist
                  title
                  year
                  userAlbumsId
                  uploader {
                    id
                    userId
                    username
                  }
                }
                userSongsId
              }
            }`, "getSong", {id: req.params.id}, req, res);
});


// Handle song create on POST.
exports.song_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateSong(
        $key: String!
        $title: String!
        $userSongsId: ID!
        $albumSongsId: ID!
        $language: String
      ) {
      createSong(input: {key: $key, title: $title, userSongsId: $userSongsId, albumSongsId: $albumSongsId, language: $language}) {
        id
        key
        title
        uploader {
          id
          username
        }
        albumSongsId
        album {
          id
          artist
          title
          year
        }
        userSongsId
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
                  key
                title
                uploader {
                  id
                  userId
                  username
                }
                album {
                  id
                  artist
                  title
                  year
                  userAlbumsId
                  uploader {
                    id
                    userId
                    username
                  }
                }
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
            userSongsId
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