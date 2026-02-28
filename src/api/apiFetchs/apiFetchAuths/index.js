import apiAuthUrls from '~/api/apiURL/apiAuths';

// Hàm gọi API login
export async function apiFetchLogin(email, password) {
  const res = await fetch(apiAuthUrls.login, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.trim(),
      password: password.trim(),
    }),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Login failed');
  }

  return json.data; // { accessToken, refreshToken }
}

// Hàm gọi API register
export async function apiFetchRegister(username, email, password) {
  const res = await fetch(apiAuthUrls.register, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
    }),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Đăng ký thất bại');
  }

  return json.message;
}

// Hàm gọi API verify OTP
export async function apiFetchVerifyOtp(email, otp) {
  const res = await fetch(apiAuthUrls.verifyOtp, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email.trim(),
      otp: otp.trim(),
    }),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.message || 'Xác thực OTP thất bại');
  }

  return json.message;
}
