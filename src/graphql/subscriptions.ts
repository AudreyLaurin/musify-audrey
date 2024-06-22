/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSong = /* GraphQL */ `subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
  onCreateSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSongSubscriptionVariables,
  APITypes.OnCreateSongSubscription
>;
export const onUpdateSong = /* GraphQL */ `subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
  onUpdateSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSongSubscriptionVariables,
  APITypes.OnUpdateSongSubscription
>;
export const onDeleteSong = /* GraphQL */ `subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
  onDeleteSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSongSubscriptionVariables,
  APITypes.OnDeleteSongSubscription
>;
export const onCreateAlbum = /* GraphQL */ `subscription OnCreateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onCreateAlbum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAlbumSubscriptionVariables,
  APITypes.OnCreateAlbumSubscription
>;
export const onUpdateAlbum = /* GraphQL */ `subscription OnUpdateAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onUpdateAlbum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAlbumSubscriptionVariables,
  APITypes.OnUpdateAlbumSubscription
>;
export const onDeleteAlbum = /* GraphQL */ `subscription OnDeleteAlbum($filter: ModelSubscriptionAlbumFilterInput) {
  onDeleteAlbum(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAlbumSubscriptionVariables,
  APITypes.OnDeleteAlbumSubscription
>;
export const onCreateSharedSong = /* GraphQL */ `subscription OnCreateSharedSong(
  $filter: ModelSubscriptionSharedSongFilterInput
) {
  onCreateSharedSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSharedSongSubscriptionVariables,
  APITypes.OnCreateSharedSongSubscription
>;
export const onUpdateSharedSong = /* GraphQL */ `subscription OnUpdateSharedSong(
  $filter: ModelSubscriptionSharedSongFilterInput
) {
  onUpdateSharedSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSharedSongSubscriptionVariables,
  APITypes.OnUpdateSharedSongSubscription
>;
export const onDeleteSharedSong = /* GraphQL */ `subscription OnDeleteSharedSong(
  $filter: ModelSubscriptionSharedSongFilterInput
) {
  onDeleteSharedSong(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSharedSongSubscriptionVariables,
  APITypes.OnDeleteSharedSongSubscription
>;
