import apiArtistUrls from '~/api/urls/apiArtists';
import axios from 'axios';

// =============== ARTIST ===============
export async function apiGetArtist(artistId) {
  try {
    const response = await axios.get(`${apiArtistUrls.getArtist}/${artistId}`);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy album:', error);
    throw error;
  }
}

// ===== GET ARTIST =====
export async function apiGetArtists() {
  try {
    const response = await axios.get(apiArtistUrls.getArtists);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách nghệ sĩ:', error);
    throw error;
  }
}

// ===== GET ARTIST BY NAME =====
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

// ===== CREATE ARTIST =====
export async function apiCreateArtist(name, avatarFile) {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', name);
    formData.append('avatar', avatarFile);
    const response = await axios.post(apiArtistUrls.createArtist, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi tạo nghệ sĩ';
    throw new Error(message);
  }
}

// ===== UPDATE ARTIST =====
export async function apiUpdateArtist(id, name, avatarFile) {
  try {
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('name', name);
    if (avatarFile) {
      formData.append('avatar', avatarFile);
    }
    const response = await axios.put(`${apiArtistUrls.updateArtist}/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Lỗi API:', error.response);
    const message = error.response?.data?.message || error.message || 'Lỗi cập nhật nghệ sĩ';
    throw new Error(message);
  }
}

// =============== DELETE ARTIST ===============
export async function apiDeleteArtist(artistId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(apiArtistUrls.deleteArtist, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        artistId: artistId,
      },
    });
    return response.data.success;
  } catch (error) {
    const message = error.response?.data?.message || error.response?.data || error.message || 'Lỗi xóa nghệ sĩ';
    throw new Error(message);
  }
}

// =============== FAVORITE ARTIST ===============

export async function apiGetMyFavoriteArtists() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiArtistUrls.getMyFavoriteArtists, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách nghệ sĩ:', error);
    return [];
  }
}

export async function apiAddArtistToFavorite(artistId) {
  try {
    const token = localStorage.getItem('token');
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
    const message = error.response?.data?.message || error.response?.data || error.message;
    throw new Error(message);
  }
}

export async function apiRemoveArtistFromFavorite(artistId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${apiArtistUrls.removeArtistFromFavorite}/${artistId}`, {
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
