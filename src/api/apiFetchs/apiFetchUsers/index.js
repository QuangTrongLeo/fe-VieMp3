import apiUsersUrls from '~/api/apiURL/apiUsers';

export async function apiFetchGetProfile() {
  const token = localStorage.getItem('token');
  const res = await fetch(apiUsersUrls.getProfile, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Request failed');
  }
  return data;
}

export async function apiFetchUpdateProfile(formData) {
  const token = localStorage.getItem('token');
  const res = await fetch(apiUsersUrls.updateProfile, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Update failed');
  }
  return data;
}
