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
export const getSharedSong = /* GraphQL */ `query GetSharedSong($id: ID!) {
  getSharedSong(id: $id) {
    id
    songId
    user {
      id
      userId
      username
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    userSharedSongsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSharedSongQueryVariables,
  APITypes.GetSharedSongQuery
>;
export const listSharedSongs = /* GraphQL */ `query ListSharedSongs(
  $filter: ModelSharedSongFilterInput
  $limit: Int
  $nextToken: String
) {
  listSharedSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      songId
      createdAt
      updatedAt
      userSharedSongsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSharedSongsQueryVariables,
  APITypes.ListSharedSongsQuery
>;
