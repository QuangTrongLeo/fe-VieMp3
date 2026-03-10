// Layouts
import { SecondLayout } from '~/layouts';

import config from '~/config';

// publishRoutes
import { Home, Genres, History, Login, Register, Otp, Searched, GenreDetail, AlbumDetail } from '~/pages';

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

// modRoutes
import { Manage } from '~/pages';
import PlayListDetail from '~/pages/PlayListDetail';

// adminRoutes
import { Analytic } from '~/pages';

const publishRoutes = [
  { path: config.routes.home, component: Home },
  { path: `${config.routes.artist}/:artistName`, component: ArtistDetail },
  { path: `${config.routes.genre}/:genreId`, component: GenreDetail },
  { path: `${config.routes.album}/:albumId`, component: AlbumDetail },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.login, component: Login, layout: SecondLayout },
  { path: config.routes.register, component: Register, layout: SecondLayout },
  { path: config.routes.otp, component: Otp, layout: SecondLayout },
  { path: config.routes.searched, component: Searched },
];

const userRoutes = [
  { path: `${config.routes.song}/:songId`, component: SongDetail },
  { path: `${config.routes.lyris}/:lyrisName`, component: LyrisDetail },
  { path: `${config.routes.playlist}/:playlistId`, component: PlayListDetail },
  { path: config.routes.history, component: History },
  { path: config.routes.library, component: Library },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.playlists, component: PlayList },
  { path: config.routes.favoriteSongs, component: FavoriteSongs },
  { path: config.routes.favoriteAlbums, component: FavoriteAlbums },
  { path: config.routes.favoriteArtists, component: FavoriteArtists },
];

const modRoutes = [{ path: config.routes.manage, component: Manage }];

const adminRoutes = [{ path: config.routes.analytic, component: Analytic }];

export { publishRoutes, userRoutes, modRoutes, adminRoutes };
