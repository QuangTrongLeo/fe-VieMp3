// Layouts
import { SecondLayout } from '~/components/Layouts';

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
  Searched,
} from '~/pages';

// userRoutes
import { Profile } from '~/pages';

// artistRoutes
import { Upload, MySongs, MyAlbums } from '~/pages';

const publishRoutes = [
  { path: '/', component: Home },
  { path: '/library', component: Library },
  { path: '/genres', component: Genres },
  { path: '/history', component: History },
  { path: '/playlist', component: PlayList },
  { path: '/favorite-songs', component: FavoriteSongs },
  { path: '/favorite-albums', component: FavoriteAlbums },
  { path: '/favorite-artists', component: FavoriteArtists },
  { path: '/login', component: Login, layout: SecondLayout },
  { path: '/register', component: Register, layout: SecondLayout },
  { path: '/searched', component: Searched },
];

const userRoutes = [
  { path: '/library', component: Library },
  { path: '/profile', component: Profile },
  // { path: '/playlist', component: PlayList },
];

const artistRoutes = [
  { path: '/upload', component: Upload },
  { path: '/my-songs', component: MySongs },
  { path: '/my-albums', component: MyAlbums },
];

const adminRoutes = [];

export { publishRoutes, userRoutes, artistRoutes, adminRoutes };
