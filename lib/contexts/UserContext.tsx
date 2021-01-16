import axios from 'axios';
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from 'react';
import { API_URL, JWT_LOGIN_TOKEN } from '../../constants';
import { User } from '../../types/users';

export const UserContext = createContext<[User, Dispatch<User>] | null>(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const jwtLoginToken = localStorage.getItem(JWT_LOGIN_TOKEN);
    axios
      .get(`${API_URL}/auth/check`, {
        headers: { Authorization: `Bearer ${jwtLoginToken}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
