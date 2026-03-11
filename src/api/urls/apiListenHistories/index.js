import apiBaseURL from '~/utils/httpBaseURL';

const LISTEN_HISTORIES_PATH = '/listen-histories';

const apiListenHistoryBaseUrl = `${apiBaseURL.defaults.baseURL}${LISTEN_HISTORIES_PATH}`;

const apiListenHistoryUrls = {
  getMyListenHistory: `${apiListenHistoryBaseUrl}/me`,
};

export default apiListenHistoryUrls;
