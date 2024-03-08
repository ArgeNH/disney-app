/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useContext, PropsWithChildren } from 'react';

type AuthContextType = {
  login: boolean;
};

const initialValue = {
  login: false,
};

export const AuthContext = createContext<AuthContextType>(initialValue);

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [auth, setAuth] = useState(initialValue.login);

  return (
    <AuthContext.Provider value={{ login: auth }}>
      {children}
    </AuthContext.Provider>
  );
};
