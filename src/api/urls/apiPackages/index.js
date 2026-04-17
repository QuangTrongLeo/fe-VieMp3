import apiBaseURL from '~/utils/httpBaseURL';

const PACKAGE_PATH = '/packages';

const apiPackageBaseUrl = `${apiBaseURL.defaults.baseURL}${PACKAGE_PATH}`;

const apiPackageUrls = {
  // POST
  createPackage: apiPackageBaseUrl,

  // PUT
  updatePackage: apiPackageBaseUrl,

  // DELETE
  deletePackage: apiPackageBaseUrl,

  // GET
  getPackage: apiPackageBaseUrl,
  getPackages: `${apiPackageBaseUrl}/all`,
  getPackagesType: `${apiPackageBaseUrl}/types`,
  getPackagesDuration: `${apiPackageBaseUrl}/durations`,
};

export default apiPackageUrls;
