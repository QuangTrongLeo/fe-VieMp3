// Layouts
import { SecondLayout } from '~/layouts';

import config from '~/config';

// publishRoutes
import { Home, Genres, History, Login, Register, Otp, GenreDetail, AlbumDetail } from '~/pages';

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
import { Manage, AlbumManage, ArtistManage, GenreManage, SongManage } from '~/pages';
import PlayListDetail from '~/pages/PlayListDetail';

// adminRoutes
import { Analytic, AccountManage, MembershipManage, RevenueManage } from '~/pages';

const publishRoutes = [
  { path: config.routes.home, component: Home },
  { path: `${config.routes.artist}/:artistName`, component: ArtistDetail },
  { path: `${config.routes.genre}/:genreId`, component: GenreDetail },
  { path: `${config.routes.album}/:albumId`, component: AlbumDetail },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.login, component: Login, layout: SecondLayout },
  { path: config.routes.register, component: Register, layout: SecondLayout },
  { path: config.routes.otp, component: Otp, layout: SecondLayout },
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

const modRoutes = [
  { path: config.routes.manage, component: Manage },
  { path: config.routes.manageArtists, component: ArtistManage },
  { path: config.routes.manageAlbums, component: AlbumManage },
  { path: config.routes.manageSongs, component: SongManage },
  { path: config.routes.manageGenres, component: GenreManage },
];

const adminRoutes = [
  { path: config.routes.manageAccounts, component: AccountManage },
  { path: config.routes.manageMemberships, component: MembershipManage },
  { path: config.routes.manageRevenues, component: RevenueManage },
  { path: config.routes.analytic, component: Analytic },
];

export { publishRoutes, userRoutes, modRoutes, adminRoutes };
