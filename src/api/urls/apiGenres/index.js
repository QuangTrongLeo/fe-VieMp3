import apiBaseURL from '~/utils/httpBaseURL';

const GENRE_PATH = '/genres';

const apiGenreUrls = {
  getGenre: `${apiBaseURL.defaults.baseURL}${GENRE_PATH}`,
  getGenres: `${apiBaseURL.defaults.baseURL}${GENRE_PATH}/all`,
};

export default apiGenreUrls;
