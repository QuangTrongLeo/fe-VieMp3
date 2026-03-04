import apiAlbumUrls from '~/api/apiURL/apiAlbums';
import axios from 'axios';

// ===== GET ALBUM =====
export async function apiFetchAlbum(albumId) {
  try {
    const response = await axios.get(`${apiAlbumUrls.getAlbum}/${albumId}`);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy album:', error);
    throw error;
  }
}

// ===== GET ALL ALBUMS =====
export async function apiFetchAlbums() {
  try {
    const response = await axios.get(apiAlbumUrls.getAlbums);
    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách album:', error);
    throw error;
  }
}

// ===== GET ALBUMS BY ARTIST =====
export async function apiFetchAlbumsByArtist(artistId) {
  try {
    const response = await axios.get(`${apiAlbumUrls.getAlbumsByArtist}/artist/${artistId}`);
    return response.data.data;
  } catch (error) {
    const message =
      error.response?.data?.message || error.response?.data || error.message || 'Lỗi khi lấy album theo nghệ sĩ';
    throw new Error(message);
  }
}
