import apiListenHistoryUrls from '~/api/urls/apiListenHistories';
import axios from 'axios';

export async function apiGetMyListenHistory() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiListenHistoryUrls.getMyListenHistory, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) return null;
  }
}
