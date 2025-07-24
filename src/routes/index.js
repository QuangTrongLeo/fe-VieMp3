// Layouts
import { HeaderOnlyLayout } from '~/components/Layouts';

// publishRoutes
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Searched from '~/pages/Searched';

// userRoutes
import History from '~/pages/History';
import Library from '~/pages/Library';
import Profile from '~/pages/Profile';

// artistRoutes
import Upload from '~/pages/Upload';
import MySongs from '~/pages/MySongs';
import MyAlbums from '~/pages/MyAlbums';

const publishRoutes = [
  { path: '/', component: Home },
  { path: '/login', component: Login, layout: HeaderOnlyLayout },
  { path: '/register', component: Register, layout: HeaderOnlyLayout },
  { path: '/searched', component: Searched },
];

const userRoutes = [
  { path: '/history', component: History },
  { path: '/library', component: Library },
  { path: '/profile', component: Profile },
];

const artistRoutes = [
  { path: '/upload', component: Upload },
  { path: '/my-songs', component: MySongs },
  { path: '/my-albums', component: MyAlbums },
];

const adminRoutes = [];

export { publishRoutes, userRoutes, artistRoutes, adminRoutes };
