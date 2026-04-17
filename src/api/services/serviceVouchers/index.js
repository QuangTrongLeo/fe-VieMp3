import apiVoucherUrls from '~/api/urls/apiVouchers';
import axios from 'axios';

// ===== CREATE VOUCHER =====
export async function apiCreateVoucher(payload) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(apiVoucherUrls.createVoucher, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi khi tạo voucher');
  }
}

// ===== UPDATE VOUCHER =====
export async function apiUpdateVoucher(id, payload) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${apiVoucherUrls.updateVoucher}/${id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi khi cập nhật voucher');
  }
}

// ===== DELETE VOUCHER =====
export async function apiDeleteVoucher(id) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${apiVoucherUrls.deleteVoucher}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Lỗi khi xóa voucher');
  }
}

// ===== GET VOUCHER BY ID =====
export async function apiGetVoucherById(id) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${apiVoucherUrls.getVoucher}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy thông tin voucher:', error);
    throw error;
  }
}

// ===== GET ALL VOUCHERS =====
export async function apiGetAllVouchers() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiVoucherUrls.getAllVouchers, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách toàn bộ voucher:', error);
    throw error;
  }
}

// ===== GET AVAILABLE VOUCHERS =====
export async function apiGetAvailableVouchers() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiVoucherUrls.getAvailableVouchers, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách voucher khả dụng:', error);
    throw error;
  }
}
