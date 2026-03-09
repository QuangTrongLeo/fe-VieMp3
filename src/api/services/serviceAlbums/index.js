import apiAlbumUrls from '~/api/urls/apiAlbums';
import axios from 'axios';

// ===== GET ALBUM =====
export async function apiGetAlbum(albumId) {
  try {
    const response = await axios.get(`${apiAlbumUrls.getAlbum}/${albumId}`);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy album:', error);
    throw error;
  }
}

// ===== GET ALL ALBUMS =====
export async function apiGetAlbums() {
  try {
    const response = await axios.get(apiAlbumUrls.getAlbums);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách album:', error);
    throw error;
  }
}

// ===== GET ALBUMS BY ARTIST =====
export async function apiGetAlbumsByArtist(artistId) {
  try {
    const response = await axios.get(`${apiAlbumUrls.getAlbumsByArtist}/artist/${artistId}`);
    return response.data.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.response?.data || error.message || 'Lỗi khi lấy album theo nghệ sĩ';
    throw new Error(message);
  }
}

export async function apiAddSongToAlbum(albumId, songId) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(
      apiAlbumUrls.addSongToAlbum,
      {
        albumId,
        songId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) {
      alert('Vui lòng đăng nhập');
    }
    return null;
  }
}

export async function apiRemoveSongFromAlbum(songId) {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.delete(`${apiAlbumUrls.removeSongFromAlbum}/${songId}/remove-song`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) {
      alert('Vui lòng đăng nhập');
    }
    return null;
  }
}

// =============== FAVORITE ALBUM ===============

export async function apiGetMyFavoriteAlbums() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return [];
    }
    const response = await axios.get(apiAlbumUrls.getMyFavoriteAlbums, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    if (error.response?.status === 403 || error.response?.status === 401) {
      alert('Vui lòng đăng nhập');
    }
    return [];
  }
}

export async function apiAddAlbumToFavorite(albumId) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vui lòng đăng nhập');
      return false;
    }
    const response = await axios.post(
      `${apiAlbumUrls.addAlbumToFavorite}/${albumId}`,
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

export async function apiRemoveAlbumFromFavorite(albumId) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vui lòng đăng nhập');
      return false;
    }
    const response = await axios.delete(`${apiAlbumUrls.removeAlbumFromFavorite}/${albumId}`, {
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
