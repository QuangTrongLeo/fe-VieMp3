import apiBaseURL from '~/utils/httpBaseURL';

const AUTH_PATH = '/auth';

const apiAuthBaseUrl = `${apiBaseURL.defaults.baseURL}${AUTH_PATH}`;

const apiAuthUrls = {
  register: `${apiAuthBaseUrl}/register`,
  verifyOtp: `${apiAuthBaseUrl}/verify-otp`,
  login: `${apiAuthBaseUrl}/login`,
};

export default apiAuthUrls;
