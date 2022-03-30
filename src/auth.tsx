import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "./components/hooks/useLocalStorage";
import { isExpired, decodeToken } from "react-jwt";

export interface User {
  token?: UserToken;
  onLogin?: any;
  onLogout?: any;
  role: string;
}

export interface UserToken {
  token: string | null;
}

type child = {
  children: JSX.Element | JSX.Element[];
};

export const AuthContext = createContext<User>({ role: 'no'});

export default function AuthProvider({ children }: child) {
  const [token, setToken] = useState<UserToken>({ token: null });
  const [name, setName] = useLocalStorage("token", "");

  useEffect(() => {
    const token = localStorage.getItem("token")
    setToken({
      token
    });
  }, []);

  const handleLogin = async () => {
    const token = await fakeAuth();
    localStorage.setItem("token", String(token?.token))
    // TODO: Uncoment this line after auth endpoint
    // const decode = decodeToken(token)
    setToken(token);
    // TODO: do somthing about this line
    // window.location.href = "/dashboard"
  };

  const handleLogout = () => {
    console.log("out");
    setToken({ token: "" });
  };

  const value: User = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
    role: 'admin'
  };

  console.log("last line of provider", value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const fakeAuth = (): Promise<UserToken> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ token: "2342f2f1d131rf12" }), 250);
  });
