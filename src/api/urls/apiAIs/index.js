import apiBaseURL from '~/utils/httpBaseURL';

const AI_PATH = '/ai';

const apiAIBaseUrl = `${apiBaseURL.defaults.baseURL}${AI_PATH}`;

const apiAIUrls = {
  // POST
  chatAI: `${apiAIBaseUrl}/chat`,
};

export default apiAIUrls;
