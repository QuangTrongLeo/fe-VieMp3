import apiBaseURL from '~/utils/httpBaseURL';

const GENRE_PATH = '/genres';

const apiGenreBaseUrl = `${apiBaseURL.defaults.baseURL}${GENRE_PATH}`;

const apiGenreUrls = {
  // POST
  createGenre: apiGenreBaseUrl,

  // PUT
  updateGenre: apiGenreBaseUrl,

  // DELETE
  deleteGenre: apiGenreBaseUrl,

  // GET
  getGenre: apiGenreBaseUrl,
  getGenres: `${apiGenreBaseUrl}/all`,
};

export default apiGenreUrls;
