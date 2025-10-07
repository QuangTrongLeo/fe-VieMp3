import apiArtistUrls from '~/api/apiURL/apiArtists';
import axios from 'axios';

export async function apiFetchArtistByName(artistName) {
  try {
    const response = await axios.get(`${apiArtistUrls.getArtistByName}/${artistName.toLowerCase()}`);
    return response.data;
  } catch (error) {
    // nếu muốn trả lỗi dạng text
    const message = error.response?.data || error.message || 'Lỗi khi fetch artist';
    throw new Error(message);
  }
}
