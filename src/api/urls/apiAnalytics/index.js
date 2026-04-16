import apiBaseURL from '~/utils/httpBaseURL';

const ANALYTIC_PATH = '/analytics';

const apiAnalyticBaseUrl = `${apiBaseURL.defaults.baseURL}${ANALYTIC_PATH}`;

const apiAnalyticUrls = {
  // LISTEN
  getListenByMonth: `${apiAnalyticBaseUrl}/listen/month`,
  getListenByWeek: `${apiAnalyticBaseUrl}/listen/week`,

  // GENRES
  getGenreStatistics: `${apiAnalyticBaseUrl}/genres`,
};

export default apiAnalyticUrls;
