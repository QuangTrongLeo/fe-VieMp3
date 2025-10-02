import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // dùng named import

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

  const logout = () => {
    setCurrentToken('');
    localStorage.removeItem('token');
    setRoles([]);
  };

  return (
    <AuthContext.Provider value={{ currentToken, setCurrentToken, roles, logout }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
