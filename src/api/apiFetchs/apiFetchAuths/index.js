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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Login failed');
  }

  return res.json(); // login trả về JSON (TokenResponse)
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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Register failed');
  }

  return res.text(); // register trả về text ("OTP đã được gửi ...")
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

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || 'Verify OTP failed');
  }

  return res.text(); // verifyOtp trả về text ("Xác thực thành công!")
}
