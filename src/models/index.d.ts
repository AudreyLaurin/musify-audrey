import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly username: string;
  readonly albums: (Album | null)[];
  readonly songs: (Song | null)[];
  readonly sharedSongs?: (UserSong | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId: string;
  readonly username: string;
  readonly albums: AsyncCollection<Album>;
  readonly songs: AsyncCollection<Song>;
  readonly sharedSongs: AsyncCollection<UserSong>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly key: string;
  readonly title: string;
  readonly uploader: User;
  readonly album: Album;
  readonly language?: string | null;
  readonly users?: (UserSong | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSongsId?: string | null;
  readonly albumSongsId: string;
}

type LazySong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly key: string;
  readonly title: string;
  readonly uploader: AsyncItem<User>;
  readonly album: AsyncItem<Album>;
  readonly language?: string | null;
  readonly users: AsyncCollection<UserSong>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSongsId?: string | null;
  readonly albumSongsId: string;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

type EagerAlbum = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Album, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uploader: User;
  readonly artist: string;
  readonly title: string;
  readonly year: number;
  readonly songs: (Song | null)[];
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAlbumsId?: string | null;
}

type LazyAlbum = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Album, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uploader: AsyncItem<User>;
  readonly artist: string;
  readonly title: string;
  readonly year: number;
  readonly songs: AsyncCollection<Song>;
  readonly picture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAlbumsId?: string | null;
}

export declare type Album = LazyLoading extends LazyLoadingDisabled ? EagerAlbum : LazyAlbum

export declare const Album: (new (init: ModelInit<Album>) => Album) & {
  copyOf(source: Album, mutator: (draft: MutableModel<Album>) => MutableModel<Album> | void): Album;
}

type EagerUserSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSong, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly songId?: string | null;
  readonly user: User;
  readonly song: Song;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSong, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly songId?: string | null;
  readonly user: AsyncItem<User>;
  readonly song: AsyncItem<Song>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSong = LazyLoading extends LazyLoadingDisabled ? EagerUserSong : LazyUserSong

export declare const UserSong: (new (init: ModelInit<UserSong>) => UserSong) & {
  copyOf(source: UserSong, mutator: (draft: MutableModel<UserSong>) => MutableModel<UserSong> | void): UserSong;
}