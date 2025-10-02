import apiBaseURL from '~/utils/httpBaseURL';

const GENRE_PATH = '/genres';

// const apiGenres = [
//   { id: 1, genreName: 'BALLAD', genreDesc: 'Nhạc Ballad' },
//   { id: 2, genreName: 'POP', genreDesc: 'Nhạc Pop Việt' },
//   { id: 3, genreName: 'RNB', genreDesc: 'R&B Việt' },
//   { id: 4, genreName: 'RAP', genreDesc: 'Rap' },
//   { id: 5, genreName: 'HIPHOP', genreDesc: 'Hip Hop Việt' },
//   { id: 6, genreName: 'DANCE', genreDesc: 'Nhạc Dance Việt' },
//   { id: 7, genreName: 'REMIX', genreDesc: 'Nhạc Remix Việt' },
//   { id: 8, genreName: 'LOFI', genreDesc: 'Nhạc Lofi Chill' },
//   { id: 9, genreName: 'ACOUSTIC', genreDesc: 'Nhạc Acoustic Việt' },
//   { id: 10, genreName: 'INDIE', genreDesc: 'Indie Việt' },
// ];

const apiGenreUrls = {
  genres: `${apiBaseURL.defaults.baseURL}${GENRE_PATH}`,
};

export default apiGenreUrls;
