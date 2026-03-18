import apiRolesUrls from '~/api/urls/apiRoles';
import axios from 'axios';

// ===== GET ALL ROLES =====
export async function apiGetRoles() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiRolesUrls.getRoles, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    throw new Error(message);
  }
}
