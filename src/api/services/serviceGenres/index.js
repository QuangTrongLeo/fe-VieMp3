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

// ===== CREATE GENRE =====
export async function apiCreateGenre(data) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(apiGenreUrls.createGenre, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}

// ===== UPDATE GENRE =====
export async function apiUpdateGenre(id, data) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${apiGenreUrls.updateGenre}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}

// ===== DELETE GENRE =====
export async function apiDeleteGenre(genreId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${apiGenreUrls.deleteGenre}/${genreId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.success;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}
