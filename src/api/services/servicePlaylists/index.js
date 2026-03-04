import apiPlaylistUrls from '~/api/urls/apiPlayLists';
import axios from 'axios';

// Hàm gọi API lấy danh sách genres
export async function apiGetMyPlaylists() {
  try {
    const response = await axios.get(apiPlaylistUrls.getMyPlaylists);
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}
