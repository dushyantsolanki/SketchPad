import { useContext, createContext } from "react";

const AuthContext = createContext({});

const AuthProvider = AuthContext.Provider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
