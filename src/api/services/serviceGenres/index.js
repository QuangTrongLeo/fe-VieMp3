import apiGenreUrls from '~/api/urls/apiGenres';
import axios from 'axios';

// Hàm gọi API lấy danh sách genres
export async function apiGetGenres() {
  try {
    const response = await axios.get(apiGenreUrls.getGenres);
    return response.data.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.response?.data || error.message || 'Lỗi khi lấy danh sách thể loại';
    throw new Error(message);
  }
}

// ===== GET GENRE =====
export async function apiGetGenre(genreId) {
  try {
    const response = await axios.get(`${apiGenreUrls.getGenre}/${genreId}`);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy album:', error);
    throw error;
  }
}
