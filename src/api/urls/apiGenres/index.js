import apiBaseURL from '~/utils/httpBaseURL';

const GENRE_PATH = '/genres';

const apiGenreBaseUrl = `${apiBaseURL.defaults.baseURL}${GENRE_PATH}`;

const apiGenreUrls = {
  getGenre: apiGenreBaseUrl,
  getGenres: `${apiGenreBaseUrl}/all`,
};

export default apiGenreUrls;
