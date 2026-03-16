import apiBaseURL from '~/utils/httpBaseURL';

const USER_PATH = '/users';

const apiUserBaseUrl = `${apiBaseURL.defaults.baseURL}${USER_PATH}`;

const apiUsersUrls = {
  // PUT
  updateProfile: `${apiUserBaseUrl}/me`,

  // GET
  getUsers: `${apiUserBaseUrl}/all`,
  getProfile: `${apiUserBaseUrl}/me`,
};

export default apiUsersUrls;
