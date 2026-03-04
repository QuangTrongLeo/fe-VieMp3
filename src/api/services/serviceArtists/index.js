import apiArtistUrls from '~/api/urls/apiArtists';
import axios from 'axios';

export async function apiGetArtists() {
  try {
    const response = await axios.get(apiArtistUrls.getArtists);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách nghệ sĩ:', error);
    throw error;
  }
}

export async function apiGetArtistByName(artistName) {
  try {
    const response = await axios.get(apiArtistUrls.getArtistByName, {
      params: { name: artistName },
    });
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data || error.message || 'Lỗi khi fetch artist';
    throw new Error(message);
  }
}
