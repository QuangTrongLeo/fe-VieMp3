import { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { apiJwtTokenUser, apiJwtTokenArtist, apiJwtTokenAdmin } from '~/api/apiURL/apiJwtToken';

const AuthContext = createContext();
const token = apiJwtTokenArtist;

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentToken, setCurrentToken] = useState(token);
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

  return <AuthContext.Provider value={{ currentToken, setCurrentToken, roles }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
