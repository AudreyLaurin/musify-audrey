/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSong = /* GraphQL */ `mutation CreateSong(
  $input: CreateSongInput!
  $condition: ModelSongConditionInput
) {
  createSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSongMutationVariables,
  APITypes.CreateSongMutation
>;
export const updateSong = /* GraphQL */ `mutation UpdateSong(
  $input: UpdateSongInput!
  $condition: ModelSongConditionInput
) {
  updateSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSongMutationVariables,
  APITypes.UpdateSongMutation
>;
export const deleteSong = /* GraphQL */ `mutation DeleteSong(
  $input: DeleteSongInput!
  $condition: ModelSongConditionInput
) {
  deleteSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSongMutationVariables,
  APITypes.DeleteSongMutation
>;
export const createAlbum = /* GraphQL */ `mutation CreateAlbum(
  $input: CreateAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  createAlbum(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAlbumMutationVariables,
  APITypes.CreateAlbumMutation
>;
export const updateAlbum = /* GraphQL */ `mutation UpdateAlbum(
  $input: UpdateAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  updateAlbum(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAlbumMutationVariables,
  APITypes.UpdateAlbumMutation
>;
export const deleteAlbum = /* GraphQL */ `mutation DeleteAlbum(
  $input: DeleteAlbumInput!
  $condition: ModelAlbumConditionInput
) {
  deleteAlbum(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAlbumMutationVariables,
  APITypes.DeleteAlbumMutation
>;
export const createUserSong = /* GraphQL */ `mutation CreateUserSong(
  $input: CreateUserSongInput!
  $condition: ModelUserSongConditionInput
) {
  createUserSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserSongMutationVariables,
  APITypes.CreateUserSongMutation
>;
export const updateUserSong = /* GraphQL */ `mutation UpdateUserSong(
  $input: UpdateUserSongInput!
  $condition: ModelUserSongConditionInput
) {
  updateUserSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserSongMutationVariables,
  APITypes.UpdateUserSongMutation
>;
export const deleteUserSong = /* GraphQL */ `mutation DeleteUserSong(
  $input: DeleteUserSongInput!
  $condition: ModelUserSongConditionInput
) {
  deleteUserSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserSongMutationVariables,
  APITypes.DeleteUserSongMutation
>;
