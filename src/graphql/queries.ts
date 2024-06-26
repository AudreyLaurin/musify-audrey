/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    userId
    username
    albums {
      nextToken
      __typename
    }
    songs {
      nextToken
      __typename
    }
    sharedSongs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      username
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSong = /* GraphQL */ `query GetSong($id: ID!) {
  getSong(id: $id) {
    id
    key
    title
    uploader {
      id
      userId
      username
      createdAt
      updatedAt
      __typename
    }
    album {
      id
      artist
      title
      year
      picture
      createdAt
      updatedAt
      userAlbumsId
      __typename
    }
    language
    users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    userSongsId
    albumSongsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSongQueryVariables, APITypes.GetSongQuery>;
export const listSongs = /* GraphQL */ `query ListSongs(
  $filter: ModelSongFilterInput
  $limit: Int
  $nextToken: String
) {
  listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      key
      title
      language
      createdAt
      updatedAt
      userSongsId
      albumSongsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListSongsQueryVariables, APITypes.ListSongsQuery>;
export const getAlbum = /* GraphQL */ `query GetAlbum($id: ID!) {
  getAlbum(id: $id) {
    id
    uploader {
      id
      userId
      username
      createdAt
      updatedAt
      __typename
    }
    artist
    title
    year
    songs {
      nextToken
      __typename
    }
    picture
    createdAt
    updatedAt
    userAlbumsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAlbumQueryVariables, APITypes.GetAlbumQuery>;
export const listAlbums = /* GraphQL */ `query ListAlbums(
  $filter: ModelAlbumFilterInput
  $limit: Int
  $nextToken: String
) {
  listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      artist
      title
      year
      picture
      createdAt
      updatedAt
      userAlbumsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAlbumsQueryVariables,
  APITypes.ListAlbumsQuery
>;
export const getUserSong = /* GraphQL */ `query GetUserSong($id: ID!) {
  getUserSong(id: $id) {
    id
    userId
    songId
    user {
      id
      userId
      username
      createdAt
      updatedAt
      __typename
    }
    song {
      id
      key
      title
      language
      createdAt
      updatedAt
      userSongsId
      albumSongsId
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserSongQueryVariables,
  APITypes.GetUserSongQuery
>;
export const listUserSongs = /* GraphQL */ `query ListUserSongs(
  $filter: ModelUserSongFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      songId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserSongsQueryVariables,
  APITypes.ListUserSongsQuery
>;
export const userSongsByUserId = /* GraphQL */ `query UserSongsByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserSongFilterInput
  $limit: Int
  $nextToken: String
) {
  userSongsByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      songId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSongsByUserIdQueryVariables,
  APITypes.UserSongsByUserIdQuery
>;
export const userSongsBySongId = /* GraphQL */ `query UserSongsBySongId(
  $songId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserSongFilterInput
  $limit: Int
  $nextToken: String
) {
  userSongsBySongId(
    songId: $songId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userId
      songId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserSongsBySongIdQueryVariables,
  APITypes.UserSongsBySongIdQuery
>;
