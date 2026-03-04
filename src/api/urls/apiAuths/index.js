import apiBaseURL from '~/utils/httpBaseURL';

const AUTH_PATH = '/auth';

const apiAuthUrls = {
  register: `${apiBaseURL.defaults.baseURL}${AUTH_PATH}/register`,
  verifyOtp: `${apiBaseURL.defaults.baseURL}${AUTH_PATH}/verify-otp`,
  login: `${apiBaseURL.defaults.baseURL}${AUTH_PATH}/login`,
};

export default apiAuthUrls;
