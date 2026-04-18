import apiBaseURL from '~/utils/httpBaseURL';

const USER_PATH = '/users';

const apiUserBaseUrl = `${apiBaseURL.defaults.baseURL}${USER_PATH}`;

const apiUsersUrls = {
  // PUT
  updateProfile: `${apiUserBaseUrl}/me`,
  updateUserRoles: `${apiUserBaseUrl}/roles`,

  // GET
  getUsers: `${apiUserBaseUrl}/all`,
  getProfile: `${apiUserBaseUrl}/me`,
  checkUserIsStudent: `${apiUserBaseUrl}/is-student`,
};

export default apiUsersUrls;
