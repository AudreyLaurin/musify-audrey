const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.album_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetAlbum($id: ID!) {
            getAlbum(id: $id) {
                id
                artist
                title
                year
                uploader {
                  id
                  userId
                  username
                }
                picture
                songs {
                  items {
                    id
                    key
                    title
                  }
                }
              }
            }`, "getAlbum", {id: req.params.id}, req, res);
});


// Handle album create on POST.
exports.album_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateAlbum(
        $artist: String!
        $title: String!
        $year: Int!
        $userAlbumsId: ID!
        $picture: String
      ) {
      createAlbum(input: {artist: $artist, title: $title, year: $year, userAlbumsId: $userAlbumsId, picture: $picture}) {
        id
        artist
        title
        year
        userAlbumsId
        picture
      }
    }
    `, "createAlbum", {...req.body}, req, res)
});

exports.album_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query ListAlbums{
              listAlbums {
                items {
                    id
                    artist
                    title
                    year
                    uploader {
                      id
                      userId
                      username
                    }
                    picture
                    songs {
                      items {
                        id
                        key
                        title
                      }
                    }
                  }
                }
            }
    `, "listAlbums", {}, req, res)
})

exports.album_update = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation UpdateAlbum(
            $id: ID!
            $artist: String
            $title: String
            $year: Int
            $picture: String
        ) {
          updateAlbum(input: {id: $id, artist: $artist, title: $title, year: $year, picture: $picture}) {
            id
            artist
            title
            year
            userAlbumsId
            picture
          }
        }`, "updateAlbum", {
        id: req.params.id, ...req.body
    }, req, res);
})

exports.album_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation DeleteAlbum($id: ID!) {
            deleteAlbum(input: {id: $id}) {
                id
            }
        }`, "deleteAlbum", {id: req.params.id}, req, res);
})