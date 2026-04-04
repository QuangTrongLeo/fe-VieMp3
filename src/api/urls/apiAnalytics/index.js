import apiBaseURL from '~/utils/httpBaseURL';

const ANALYTIC_PATH = '/analytics';

const apiAnalyticBaseUrl = `${apiBaseURL.defaults.baseURL}${ANALYTIC_PATH}`;

const apiAnalyticUrls = {
  // GET
  getListenByMonth: `${apiAnalyticBaseUrl}/listen/month`,
  getListenByWeek: `${apiAnalyticBaseUrl}/listen/week`,
};

export default apiAnalyticUrls;
