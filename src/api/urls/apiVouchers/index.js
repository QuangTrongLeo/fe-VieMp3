import apiBaseURL from '~/utils/httpBaseURL';

const VOUCHER_PATH = '/vouchers';

const apiVoucherBaseUrl = `${apiBaseURL.defaults.baseURL}${VOUCHER_PATH}`;

const apiVoucherUrls = {
  // POST
  createVoucher: apiVoucherBaseUrl,

  // PUT
  updateVoucher: apiVoucherBaseUrl,

  // DELETE
  deleteVoucher: apiVoucherBaseUrl,

  // GET
  getVoucher: apiVoucherBaseUrl,
  getAllVouchers: `${apiVoucherBaseUrl}/all`,
  getAvailableVouchers: `${apiVoucherBaseUrl}/available`,
};

export default apiVoucherUrls;
