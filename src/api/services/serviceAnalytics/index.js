import apiAnalyticUrls from '~/api/urls/apiAnalytics';
import axios from 'axios';

// ===== LISTEN =====
export async function apiGetListenByMonth() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiAnalyticUrls.getListenByMonth, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export async function apiGetListenByWeek() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiAnalyticUrls.getListenByWeek, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

// ===== GENRE =====
export async function apiGetGenreStatistics() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiAnalyticUrls.getGenreStatistics, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
