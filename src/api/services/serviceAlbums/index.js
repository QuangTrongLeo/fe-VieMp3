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
