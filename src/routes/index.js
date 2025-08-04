// Layouts
import { SecondLayout } from '~/layouts';

import config from '~/config';

// publishRoutes
import {
  Home,
  Library,
  Genres,
  History,
  PlayList,
  FavoriteSongs,
  FavoriteAlbums,
  FavoriteArtists,
  Login,
  Register,
  Otp,
  Searched,
} from '~/pages';

// userRoutes
import { ArtistDetail, SongDetail, Profile } from '~/pages';

// artistRoutes
import { Upload, MySongs, MyAlbums } from '~/pages';

const publishRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.library, component: Library },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.history, component: History },
  { path: config.routes.playlist, component: PlayList },
  { path: config.routes.favoriteSongs, component: FavoriteSongs },
  { path: config.routes.favoriteAlbums, component: FavoriteAlbums },
  { path: config.routes.favoriteArtists, component: FavoriteArtists },
  { path: config.routes.login, component: Login, layout: SecondLayout },
  { path: config.routes.register, component: Register, layout: SecondLayout },
  { path: config.routes.otp, component: Otp, layout: SecondLayout },
  { path: config.routes.searched, component: Searched },
];

const userRoutes = [
  { path: `${config.routes.artist}/:songArtist`, component: ArtistDetail },
  { path: `${config.routes.song}/:songName`, component: SongDetail },
  { path: config.routes.profile, component: Profile },
];

const artistRoutes = [
  { path: config.routes.upload, component: Upload },
  { path: config.routes.mySongs, component: MySongs },
  { path: config.routes.myAlbums, component: MyAlbums },
];

const adminRoutes = [];

export { publishRoutes, userRoutes, artistRoutes, adminRoutes };
