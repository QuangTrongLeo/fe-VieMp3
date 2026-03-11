import apiSongUrls from '~/api/urls/apiSongs';
import axios from 'axios';

// ===== GET ALL SONGS =====
export async function apiGetSongs() {
  try {
    const response = await axios.get(apiSongUrls.getSongs);
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi khi lấy danh sách bài hát';
    throw new Error(message);
  }
}

// ===== GET SONG =====
export async function apiGetSong(songId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${apiSongUrls.getSong}/${songId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi khi lấy thông tin bài hát';
    throw new Error(message);
  }
}

// ===== GET SONGS BY ALBUM =====
export async function apiGetSongsByAlbum(albumId) {
  try {
    const response = await axios.get(`${apiSongUrls.getSongsByAlbum}/${albumId}`);
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi khi lấy bài hát theo album';
    throw new Error(message);
  }
}

// ===== GET SONGS BY ARTIST =====
export async function apiGetSongsByArtist(artistId) {
  try {
    const response = await axios.get(`${apiSongUrls.getSongsByArtist}/${artistId}`);
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi khi lấy bài hát theo nghệ sĩ';
    throw new Error(message);
  }
}

// ===== GET SONGS BY GENRE =====
export async function apiGetSongsByGenre(genreId) {
  try {
    const response = await axios.get(`${apiSongUrls.getSongsByGenre}/${genreId}`);
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi khi lấy bài hát theo thể loại';
    throw new Error(message);
  }
}

// ===== GET SONGS BY PLAYLIST =====
export async function apiGetSongsByPlaylist(playlistId) {
  try {
    const response = await axios.get(`${apiSongUrls.getSongsByPlaylist}/${playlistId}`);
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Lỗi khi lấy bài hát theo playlist';
    throw new Error(message);
  }
}

// =============== FAVORITE SONG ===============
export async function apiGetMyFavoriteSongs() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return [];
    }
    const response = await axios.get(apiSongUrls.getMyFavoriteSongs, {
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

export async function apiAddSongToFavorite(songId) {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vui lòng đăng nhập');
      return false;
    }
    const response = await axios.post(
      `${apiSongUrls.addSongToFavorite}/${songId}`,
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

export async function apiRemoveSongFromFavorite(songId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${apiSongUrls.removeSongFromFavorite}/${songId}`, {
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
