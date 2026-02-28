import apiGenreUrls from '~/api/apiURL/apiGenres';

// Hàm gọi API lấy danh sách genres
export async function apiFetchGenres() {
  const res = await fetch(apiGenreUrls.genres, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await res.json();
  if (!res.ok || !result.success) {
    throw new Error(result.message || 'Failed to fetch genres');
  }
  return result.data;
}
