import apiArtistUrls from '~/api/apiURL/apiArtists';
import axios from 'axios';

export async function apiFetchArtists() {
  try {
    const response = await axios.get(apiArtistUrls.getArtists);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách nghệ sĩ:', error);
    throw error;
  }
}

export async function apiFetchArtistByName(artistName) {
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
