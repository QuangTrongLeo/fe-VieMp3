// Layouts
import { SecondLayout } from '~/layouts';

import config from '~/config';

// publishRoutes
import { Home, Genres, History, Login, Register, Otp, Searched, GenreDetail } from '~/pages';

// userRoutes
import {
  ArtistDetail,
  SongDetail,
  LyrisDetail,
  Profile,
  FavoriteSongs,
  FavoriteAlbums,
  FavoriteArtists,
  Library,
  PlayList,
} from '~/pages';

// artistRoutes
import { Upload, MySongs, MyAlbums } from '~/pages';
import PlayListDetail from '~/pages/PlayListDetail';

const publishRoutes = [
  { path: config.routes.home, component: Home },
  { path: `${config.routes.genre}/:genreName`, component: GenreDetail },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.history, component: History },
  { path: config.routes.login, component: Login, layout: SecondLayout },
  { path: config.routes.register, component: Register, layout: SecondLayout },
  { path: config.routes.otp, component: Otp, layout: SecondLayout },
  { path: config.routes.searched, component: Searched },
];

const userRoutes = [
  { path: `${config.routes.artist}/:artistName`, component: ArtistDetail },
  { path: `${config.routes.song}/:songName`, component: SongDetail },
  { path: `${config.routes.lyris}/:lyrisName`, component: LyrisDetail },
  { path: `${config.routes.playlist}/:playlistName`, component: PlayListDetail },
  { path: config.routes.library, component: Library },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.playlists, component: PlayList },
  { path: config.routes.favoriteSongs, component: FavoriteSongs },
  { path: config.routes.favoriteAlbums, component: FavoriteAlbums },
  { path: config.routes.favoriteArtists, component: FavoriteArtists },
];

const artistRoutes = [
  { path: config.routes.upload, component: Upload },
  { path: config.routes.mySongs, component: MySongs },
  { path: config.routes.myAlbums, component: MyAlbums },
];

const adminRoutes = [];

export { publishRoutes, userRoutes, artistRoutes, adminRoutes };
