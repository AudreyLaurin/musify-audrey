const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.album_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetAlbum($id: ID!) {
            getAlbum(id: $id) {
                id
                artist
                title
                year
                picture
              }
            }`, "getAlbum", {id: req.params.id}, req, res);
});

// Handle album create on POST.
exports.album_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateAlbum(
        $userAlbumsId: ID!
        $artist: String!
        $title: String!
        $year: Int!
        $picture: String
      ) {
      createAlbum(input: {userAlbumsId: $userAlbumsId, artist: $artist, title: $title, year: $year, picture: $picture}) {
        id
        userAlbumsId
        artist
        title
        year
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
                    picture
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