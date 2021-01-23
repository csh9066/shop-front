import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { ACCCESSS_TOKEN } from '../../constants';
import { User } from '../../types/users';
import api from '../api';

type AuthType = {
  user: User | null;
  loading: boolean;
  login: (form: { password: string; email: string }) => void;
  logout: () => void;
  getAccessToken: () => void;
};

export const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getAccessToken = () => {
    return localStorage.getItem(ACCCESSS_TOKEN);
  };

  const login = async (form: { password: string; email: string }) => {
    setLoading(true);
    try {
      const { data } = await api.post('/auth/login', form);
      setUser(data.user);
      localStorage.setItem(ACCCESSS_TOKEN, data.token);
      Modal.info({
        content: '로그인 성공',
        onOk: () => {
          router.push('/');
        },
      });
    } catch (e) {
      const res = e.response;
      if (res) {
        Modal.error({
          content: res.data.message,
        });
      }
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem(ACCCESSS_TOKEN);
    setUser(null);
  };

  const checkUser = async () => {
    setLoading(true);
    try {
      const { data } = await api.get('/auth/check');
      setUser(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    api.defaults.headers.Authorization = `Bearer ${getAccessToken()}`;
    checkUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, getAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
