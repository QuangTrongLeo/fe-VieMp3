// Layouts
import { SecondLayout } from '~/components/Layouts';

import routes from '~/config/routes';

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
import { Profile } from '~/pages';

// artistRoutes
import { Upload, MySongs, MyAlbums } from '~/pages';

const publishRoutes = [
  { path: routes.home, component: Home },
  { path: routes.library, component: Library },
  { path: routes.genres, component: Genres },
  { path: routes.history, component: History },
  { path: routes.playlist, component: PlayList },
  { path: routes.favoriteSongs, component: FavoriteSongs },
  { path: routes.favoriteAlbums, component: FavoriteAlbums },
  { path: routes.favoriteArtists, component: FavoriteArtists },
  { path: routes.login, component: Login, layout: SecondLayout },
  { path: routes.register, component: Register, layout: SecondLayout },
  { path: routes.otp, component: Otp, layout: SecondLayout },
  { path: routes.searched, component: Searched },
];

const userRoutes = [
  { path: routes.library, component: Library },
  { path: routes.profile, component: Profile },
  // { path: '/playlist', component: PlayList },
];

const artistRoutes = [
  { path: routes.upload, component: Upload },
  { path: routes.mySongs, component: MySongs },
  { path: routes.myAlbums, component: MyAlbums },
];

const adminRoutes = [];

export { publishRoutes, userRoutes, artistRoutes, adminRoutes };
