import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { apiRefreshToken } from '~/api/services/serviceAuths';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentToken, setCurrentToken] = useState(() => localStorage.getItem('token') || '');
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    if (!currentToken) {
      localStorage.removeItem('token');
      setRoles([]);
      return;
    }

    localStorage.setItem('token', currentToken);

    try {
      const decoded = jwtDecode(currentToken); // dùng jwtDecode như bình thường
      let userRoles = decoded.roles || [];
      if (typeof userRoles === 'string') {
        userRoles = userRoles.split(',').map(r => r.trim().toUpperCase());
      }
      setRoles(userRoles);
    } catch (error) {
      console.error('Invalid token', error);
      setRoles([]);
    }
  }, [currentToken]);

  useEffect(() => {
    const tryRefreshToken = async () => {
      const token = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refreshToken');

      if (!token && refreshToken) {
        try {
          const data = await apiRefreshToken(refreshToken);
          setCurrentToken(data.accessToken);
        } catch (error) {
          logout();
        }
      }
    };

    tryRefreshToken();
  }, []);

  const logout = () => {
    setCurrentToken('');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setRoles([]);
  };

  return (
    <AuthContext.Provider value={{ currentToken, setCurrentToken, roles, logout }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
