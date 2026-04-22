import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiGetPaymentCallback } from '~/api/services/servicePayments';

function PaymentCallback() {
  const location = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState('processing');
  const isCalled = useRef(false);

  useEffect(() => {
    const verifyPayment = async () => {
      const queryParams = Object.fromEntries(new URLSearchParams(location.search));
      if (!queryParams.vnp_ResponseCode) {
        setStatus('fail');
        return;
      }
      if (isCalled.current) return;
      isCalled.current = true;

      try {
        const res = await apiGetPaymentCallback(queryParams);
        if (res && res.success) {
          setStatus('success');
        } else {
          setStatus('fail');
        }
      } catch (error) {
        console.error('Lỗi xác thực thanh toán:', error);
        setStatus('fail');
      }
    };

    verifyPayment();
  }, [location, navigate]);

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 25px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial, sans-serif' }}>
      {status === 'processing' && (
        <div>
          <h2 style={{ color: '#007bff' }}>Đang xác thực giao dịch...</h2>
          <p>Vui lòng không đóng trình duyệt.</p>
        </div>
      )}

      {status === 'success' && (
        <div style={{ color: 'green' }}>
          <div style={{ fontSize: '60px' }}>✅</div>
          <h2>Thanh toán thành công!</h2>
          <p>
            Tài khoản của bạn đã được nâng cấp <strong>PREMIUM</strong>.
          </p>
          <button onClick={() => navigate('/')} style={{ ...buttonStyle, backgroundColor: '#28a745' }}>
            Bắt đầu trải nghiệm ngay
          </button>
        </div>
      )}

      {status === 'fail' && (
        <div style={{ color: 'red' }}>
          <div style={{ fontSize: '60px' }}>❌</div>
          <h2>Thanh toán thất bại</h2>
          <p>Giao dịch đã bị hủy hoặc mã xác thực không hợp lệ.</p>
          <button onClick={() => navigate('/')} style={{ ...buttonStyle, backgroundColor: '#dc3545' }}>
            Quay lại trang chủ
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentCallback;
