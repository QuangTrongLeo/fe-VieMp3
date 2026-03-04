import apiBaseURL from '~/utils/httpBaseURL';

const USER_PATH = '/users';

const apiUsersUrls = {
  users: `${apiBaseURL.defaults.baseURL}${USER_PATH}`,
  getProfile: `${apiBaseURL.defaults.baseURL}${USER_PATH}/me`,
  updateProfile: `${apiBaseURL.defaults.baseURL}${USER_PATH}/me`,
};

export default apiUsersUrls;
