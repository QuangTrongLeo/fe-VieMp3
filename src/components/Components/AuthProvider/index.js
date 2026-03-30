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
      const decoded = jwtDecode(currentToken);
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
    const initAuth = async () => {
      const refreshToken = localStorage.getItem('refreshToken');

      if (!currentToken && refreshToken) {
        await handleRefresh();
      }
    };

    initAuth();
  }, []);

  useEffect(() => {
    if (!currentToken) return;

    let timer;

    try {
      const decoded = jwtDecode(currentToken);
      const exp = decoded.exp * 1000;
      const now = Date.now();

      const refreshTime = exp - now - 5 * 60 * 1000;

      if (refreshTime <= 0) {
        handleRefresh();
        return;
      }

      timer = setTimeout(() => {
        handleRefresh();
      }, refreshTime);
    } catch (err) {
      logout();
    }

    return () => clearTimeout(timer);
  }, [currentToken]);

  const handleRefresh = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) return logout();

      const data = await apiRefreshToken(refreshToken);
      setCurrentToken(data.accessToken);
    } catch (error) {
      console.error('Refresh failed', error);
      logout();
    }
  };

  const logout = () => {
    setCurrentToken('');
    setRoles([]);
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  };

  return (
    <AuthContext.Provider value={{ currentToken, setCurrentToken, roles, logout }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
