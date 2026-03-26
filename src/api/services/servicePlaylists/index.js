import apiPlaylistUrls from '~/api/urls/apiPlayLists';
import axios from 'axios';

// ===== CREATE PLAYLIST =====
export async function apiCreatePlaylist(name, coverFile) {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', name);
    if (coverFile) {
      formData.append('cover', coverFile);
    }
    const response = await axios.post(apiPlaylistUrls.createPlaylist, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data;
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    throw new Error(message);
  }
}

// ===== GET MY PLAYLISTS =====
export async function apiGetMyPlaylists() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(apiPlaylistUrls.getMyPlaylists, {
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

// ===== GET PLAYLIST =====
export async function apiGetPlaylist(playlistId) {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${apiPlaylistUrls.getPlaylist}/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.data;
}

// ===== ADD SONG TO PLAYLIST =====
export async function apiAddSongToPlaylist(playlistId, songId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(
      apiPlaylistUrls.addSongToPlaylist,
      {
        playlistId,
        songId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data?.success ?? false;
  } catch (error) {
    console.error('Add song error:', error);
    return null;
  }
}

// ===== REMOVE SONG FROM PLAYLIST =====
export async function apiRemoveSongFromPlaylist(playlistId, songId) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(apiPlaylistUrls.removeSongFromPlaylist, {
      data: {
        playlistId,
        songId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data?.success ?? false;
  } catch (error) {
    console.error('Remove song error:', error);
    return null;
  }
}
