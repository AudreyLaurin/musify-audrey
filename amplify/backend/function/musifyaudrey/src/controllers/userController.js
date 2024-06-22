const asyncHandler = require("express-async-handler");
const {executeQuery} = require("../helpers/executeQuery");

exports.user_detail = asyncHandler(async (req, res, next) => {
    await executeQuery(`query GetUser($id: ID!) {
            getUser(id: $id) {
              id
              userId
              username
              albums {
                items {
                  id
                  artist
                  title
                  year
                  picture
                  userAlbumsId
                }
              }
              songs {
                items {
                  id
                  key
                  title
                  language
                  albumSongsId
                  userSongsId
                }
              }
              sharedSongs {
                items {
                  id
                  songId
                  userSharedSongsId
                }
              }
            }
        }`, "getUser", {id: req.params.id}, req, res);
});


// Handle user create on POST.
exports.user_create = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation CreateUser(
        $userId: String!
        $username: String!
      ) {
      createUser(input: {userId: $userId, username: $username}) {
        id
        username
        userId
      }
    }

    `, "createUser", {...req.body}, req, res)
});

exports.user_list = asyncHandler(async (req, res, next) => {
    await executeQuery(`query ListUsers {
       listUsers {
    items {
      id
      userId
      username
      albums {
        items {
          id
          artist
          title
          year
          picture
          userAlbumsId
        }
      }
      songs {
        items {
          id
          key
          title
          language
          albumSongsId
          userSongsId
        }
      }
      sharedSongs {
        items {
          id
          songId
          userSharedSongsId
        }
      }
    }
  }
  }
    `, "listUsers", {}, req, res)
})

exports.user_update = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation UpdateUser($id: ID!, $userId: String, $username: String) {
            updateUser(input: {id: $id, userId: $userId, username: $username}) {
            id
            userId
            username
          }
        }`, "updateUser", {
        id: req.params.id, ...req.body
    }, req, res);
})

exports.user_delete = asyncHandler(async (req, res, next) => {
    await executeQuery(`mutation DeleteUser($id: ID!) {
            deleteUser(input: {id: $id}) {
            id
          }
        }`, "deleteUser", {id: req.params.id}, req, res);
})