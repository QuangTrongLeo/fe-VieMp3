import apiBaseURL from '~/utils/httpBaseURL';

const USER_PATH = '/users';

const apiUserBaseUrl = `${apiBaseURL.defaults.baseURL}${USER_PATH}`;

const apiUsersUrls = {
  users: apiUserBaseUrl,
  getProfile: `${apiUserBaseUrl}/me`,
  updateProfile: `${apiUserBaseUrl}/me`,
};

export default apiUsersUrls;
