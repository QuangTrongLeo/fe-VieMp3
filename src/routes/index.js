// Layouts
import { SecondLayout } from '~/layouts';

import config from '~/config';

// publishRoutes
import { Home, Genres, History, Login, Register, Otp, GenreDetail, AlbumDetail, Premium } from '~/pages';

// userRoutes
import {
  ArtistDetail,
  SongDetail,
  Profile,
  FavoriteSongs,
  FavoriteAlbums,
  FavoriteArtists,
  Library,
  PlayList,
  PlayListDetail,
  PaymentCallback,
} from '~/pages';

// modRoutes
import { Manage, AlbumManage, ArtistManage, GenreManage, SongManage, VoucherManage } from '~/pages';

// adminRoutes
import {
  Analytic,
  ArtistsAnalytic,
  ContentsAnalytic,
  RevenuesAnalytic,
  UsersAnalytic,
  AccountManage,
  PackageManage,
  RevenueManage,
} from '~/pages';

const publishRoutes = [
  { path: config.routes.home, component: Home },
  { path: `${config.routes.artist}/:artistName`, component: ArtistDetail },
  { path: `${config.routes.genre}/:genreId`, component: GenreDetail },
  { path: `${config.routes.album}/:albumId`, component: AlbumDetail },
  { path: config.routes.genres, component: Genres },
  { path: config.routes.premium, component: Premium },
  { path: config.routes.login, component: Login, layout: SecondLayout },
  { path: config.routes.register, component: Register, layout: SecondLayout },
  { path: config.routes.otp, component: Otp, layout: SecondLayout },
];

const userRoutes = [
  { path: `${config.routes.song}/:songId`, component: SongDetail },
  { path: `${config.routes.playlist}/:playlistId`, component: PlayListDetail },
  { path: config.routes.history, component: History },
  { path: config.routes.library, component: Library },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.playlists, component: PlayList },
  { path: config.routes.paymentCallback, component: PaymentCallback },
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
  { path: config.routes.manageVouchers, component: VoucherManage },
];

const adminRoutes = [
  { path: config.routes.manageAccounts, component: AccountManage },
  { path: config.routes.managePackages, component: PackageManage },
  { path: config.routes.manageRevenues, component: RevenueManage },
  { path: config.routes.analytic, component: Analytic },
  { path: config.routes.analyticArtists, component: ArtistsAnalytic },
  { path: config.routes.analyticContents, component: ContentsAnalytic },
  { path: config.routes.analyticRevenues, component: RevenuesAnalytic },
  { path: config.routes.analyticUsers, component: UsersAnalytic },
];

export { publishRoutes, userRoutes, modRoutes, adminRoutes };
