import apiAuthUrls from '~/api/apiURL/apiAuths';

// Hàm gọi API login
export async function apiFetchLogin(email, password) {
  const res = await fetch(apiAuthUrls.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email.trim(), password: password.trim() }),
  });

  if (!res.ok) {
    throw new Error('Login failed');
  }

  return res.json(); // trả về { accessToken, refreshToken }
}
