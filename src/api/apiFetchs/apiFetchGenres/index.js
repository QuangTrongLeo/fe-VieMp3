import apiGenreUrls from '~/api/apiURL/apiGenres';

// Hàm gọi API lấy danh sách genres
export async function apiFetchGenres() {
  const res = await fetch(apiGenreUrls.genres, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch genres');
  }

  return res.json();
}
