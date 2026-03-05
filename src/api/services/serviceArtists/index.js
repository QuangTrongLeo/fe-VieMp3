import apiArtistUrls from '~/api/urls/apiArtists';
import axios from 'axios';

// =============== ARTIST ===============
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

// =============== FAVORITE ARTIST ===============

export async function apiGetMyFavoriteArtists() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vui lòng đăng nhập');
      return [];
    }
    const response = await axios.get(apiArtistUrls.getMyFavoriteArtists, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) {
      alert('Vui lòng đăng nhập');
    }
    console.error('Lỗi khi lấy danh sách nghệ sĩ:', error);
    return [];
  }
}

export async function apiAddArtistToFavorite(artistId) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vui lòng đăng nhập');
      return false;
    }
    const response = await axios.post(
      `${apiArtistUrls.addArtistToFavorite}/${artistId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.success;
  } catch (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      alert('Vui lòng đăng nhập');
    }
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}

export async function apiRemoveArtistFromFavorite(artistId) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vui lòng đăng nhập');
      return false;
    }
    const response = await axios.delete(`${apiArtistUrls.removeArtistFromFavorite}/${artistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.success;
  } catch (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      alert('Vui lòng đăng nhập');
    }
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}
