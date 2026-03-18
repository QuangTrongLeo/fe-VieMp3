import apiBaseURL from '~/utils/httpBaseURL';

const ROLE_PATH = '/roles';

const apiRoleBaseUrl = `${apiBaseURL.defaults.baseURL}${ROLE_PATH}`;

const apiRolesUrls = {
  // GET
  getRoles: `${apiRoleBaseUrl}/all`,
};

export default apiRolesUrls;
