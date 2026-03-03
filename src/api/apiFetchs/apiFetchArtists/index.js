import apiArtistUrls from '~/api/apiURL/apiArtists';
import axios from 'axios';

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
