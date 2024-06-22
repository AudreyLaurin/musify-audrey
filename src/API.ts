/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userId: string,
  username: string,
};

export type ModelUserConditionInput = {
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  userId: string,
  username: string,
  albums?: ModelAlbumConnection | null,
  songs?: ModelSongConnection | null,
  sharedSongs?: ModelSharedSongConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelAlbumConnection = {
  __typename: "ModelAlbumConnection",
  items:  Array<Album | null >,
  nextToken?: string | null,
};

export type Album = {
  __typename: "Album",
  id: string,
  uploader: User,
  artist: string,
  title: string,
  year: number,
  songs?: ModelSongConnection | null,
  picture?: string | null,
  createdAt: string,
  updatedAt: string,
  userAlbumsId: string,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  key: string,
  title: string,
  uploader: User,
  album: Album,
  language?: string | null,
  createdAt: string,
  updatedAt: string,
  userSongsId: string,
  albumSongsId: string,
};

export type ModelSharedSongConnection = {
  __typename: "ModelSharedSongConnection",
  items:  Array<SharedSong | null >,
  nextToken?: string | null,
};

export type SharedSong = {
  __typename: "SharedSong",
  id: string,
  songId: string,
  user: User,
  createdAt: string,
  updatedAt: string,
  userSharedSongsId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  userId?: string | null,
  username?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSongInput = {
  id?: string | null,
  key: string,
  title: string,
  language?: string | null,
  userSongsId: string,
  albumSongsId: string,
};

export type ModelSongConditionInput = {
  key?: ModelStringInput | null,
  title?: ModelStringInput | null,
  language?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userSongsId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSongInput = {
  id: string,
  key?: string | null,
  title?: string | null,
  language?: string | null,
  userSongsId?: string | null,
  albumSongsId?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type CreateAlbumInput = {
  id?: string | null,
  artist: string,
  title: string,
  year: number,
  picture?: string | null,
  userAlbumsId: string,
};

export type ModelAlbumConditionInput = {
  artist?: ModelStringInput | null,
  title?: ModelStringInput | null,
  year?: ModelIntInput | null,
  picture?: ModelStringInput | null,
  and?: Array< ModelAlbumConditionInput | null > | null,
  or?: Array< ModelAlbumConditionInput | null > | null,
  not?: ModelAlbumConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userAlbumsId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateAlbumInput = {
  id: string,
  artist?: string | null,
  title?: string | null,
  year?: number | null,
  picture?: string | null,
  userAlbumsId?: string | null,
};

export type DeleteAlbumInput = {
  id: string,
};

export type CreateSharedSongInput = {
  id?: string | null,
  songId: string,
  userSharedSongsId?: string | null,
};

export type ModelSharedSongConditionInput = {
  songId?: ModelIDInput | null,
  and?: Array< ModelSharedSongConditionInput | null > | null,
  or?: Array< ModelSharedSongConditionInput | null > | null,
  not?: ModelSharedSongConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userSharedSongsId?: ModelIDInput | null,
};

export type UpdateSharedSongInput = {
  id: string,
  songId?: string | null,
  userSharedSongsId?: string | null,
};

export type DeleteSharedSongInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  key?: ModelStringInput | null,
  title?: ModelStringInput | null,
  language?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  userSongsId?: ModelIDInput | null,
  albumSongsId?: ModelIDInput | null,
};

export type ModelAlbumFilterInput = {
  id?: ModelIDInput | null,
  artist?: ModelStringInput | null,
  title?: ModelStringInput | null,
  year?: ModelIntInput | null,
  picture?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAlbumFilterInput | null > | null,
  or?: Array< ModelAlbumFilterInput | null > | null,
  not?: ModelAlbumFilterInput | null,
  userAlbumsId?: ModelIDInput | null,
};

export type ModelSharedSongFilterInput = {
  id?: ModelIDInput | null,
  songId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSharedSongFilterInput | null > | null,
  or?: Array< ModelSharedSongFilterInput | null > | null,
  not?: ModelSharedSongFilterInput | null,
  userSharedSongsId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userAlbumsId?: ModelSubscriptionIDInput | null,
  userSongsId?: ModelSubscriptionIDInput | null,
  userSharedSongsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  key?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
};

export type ModelSubscriptionAlbumFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  artist?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
  picture?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
  or?: Array< ModelSubscriptionAlbumFilterInput | null > | null,
  albumSongsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSharedSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  songId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSharedSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSharedSongFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type CreateAlbumMutationVariables = {
  input: CreateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type CreateAlbumMutation = {
  createAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type UpdateAlbumMutationVariables = {
  input: UpdateAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type UpdateAlbumMutation = {
  updateAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type DeleteAlbumMutationVariables = {
  input: DeleteAlbumInput,
  condition?: ModelAlbumConditionInput | null,
};

export type DeleteAlbumMutation = {
  deleteAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type CreateSharedSongMutationVariables = {
  input: CreateSharedSongInput,
  condition?: ModelSharedSongConditionInput | null,
};

export type CreateSharedSongMutation = {
  createSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};

export type UpdateSharedSongMutationVariables = {
  input: UpdateSharedSongInput,
  condition?: ModelSharedSongConditionInput | null,
};

export type UpdateSharedSongMutation = {
  updateSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};

export type DeleteSharedSongMutationVariables = {
  input: DeleteSharedSongInput,
  condition?: ModelSharedSongConditionInput | null,
};

export type DeleteSharedSongMutation = {
  deleteSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      key: string,
      title: string,
      language?: string | null,
      createdAt: string,
      updatedAt: string,
      userSongsId: string,
      albumSongsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAlbumQueryVariables = {
  id: string,
};

export type GetAlbumQuery = {
  getAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type ListAlbumsQueryVariables = {
  filter?: ModelAlbumFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAlbumsQuery = {
  listAlbums?:  {
    __typename: "ModelAlbumConnection",
    items:  Array< {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSharedSongQueryVariables = {
  id: string,
};

export type GetSharedSongQuery = {
  getSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};

export type ListSharedSongsQueryVariables = {
  filter?: ModelSharedSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSharedSongsQuery = {
  listSharedSongs?:  {
    __typename: "ModelSharedSongConnection",
    items:  Array< {
      __typename: "SharedSong",
      id: string,
      songId: string,
      createdAt: string,
      updatedAt: string,
      userSharedSongsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userId: string,
    username: string,
    albums?:  {
      __typename: "ModelAlbumConnection",
      nextToken?: string | null,
    } | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    sharedSongs?:  {
      __typename: "ModelSharedSongConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    key: string,
    title: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    album:  {
      __typename: "Album",
      id: string,
      artist: string,
      title: string,
      year: number,
      picture?: string | null,
      createdAt: string,
      updatedAt: string,
      userAlbumsId: string,
    },
    language?: string | null,
    createdAt: string,
    updatedAt: string,
    userSongsId: string,
    albumSongsId: string,
  } | null,
};

export type OnCreateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnCreateAlbumSubscription = {
  onCreateAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type OnUpdateAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnUpdateAlbumSubscription = {
  onUpdateAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type OnDeleteAlbumSubscriptionVariables = {
  filter?: ModelSubscriptionAlbumFilterInput | null,
};

export type OnDeleteAlbumSubscription = {
  onDeleteAlbum?:  {
    __typename: "Album",
    id: string,
    uploader:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    artist: string,
    title: string,
    year: number,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
    } | null,
    picture?: string | null,
    createdAt: string,
    updatedAt: string,
    userAlbumsId: string,
  } | null,
};

export type OnCreateSharedSongSubscriptionVariables = {
  filter?: ModelSubscriptionSharedSongFilterInput | null,
};

export type OnCreateSharedSongSubscription = {
  onCreateSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};

export type OnUpdateSharedSongSubscriptionVariables = {
  filter?: ModelSubscriptionSharedSongFilterInput | null,
};

export type OnUpdateSharedSongSubscription = {
  onUpdateSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};

export type OnDeleteSharedSongSubscriptionVariables = {
  filter?: ModelSubscriptionSharedSongFilterInput | null,
};

export type OnDeleteSharedSongSubscription = {
  onDeleteSharedSong?:  {
    __typename: "SharedSong",
    id: string,
    songId: string,
    user:  {
      __typename: "User",
      id: string,
      userId: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userSharedSongsId?: string | null,
  } | null,
};
