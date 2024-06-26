// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Song, Album, UserSong } = initSchema(schema);

export {
  User,
  Song,
  Album,
  UserSong
};