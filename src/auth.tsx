import React, { createContext, useState, useEffect } from "react";
import useLocalStorage from "./components/hooks/useLocalStorage";

export interface Auth {
  token?: UserToken;
  onLogin?: any;
  onLogout?: any;
}

export interface UserToken {
  token: string | null;
}

type child = {
  children: JSX.Element | JSX.Element[];
};

export const AuthContext = createContext<Auth>({});

export default function AuthProvider({ children }: child) {
  const [token, setToken] = useState<UserToken>({ token: null });
  const [name, setName] = useLocalStorage("token", "");

  useEffect(() => {
    console.log(name, "name inside auth");
  }, []);

  const handleLogin = async () => {
    const token = await fakeAuth();
    console.log("in");

    setToken(token);
    // TODO: do somthing about this line
    // window.location.href = "/dashboard"
  };

  const handleLogout = () => {
    console.log("out");
    setToken({ token: "" });
  };

  const value: Auth = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  console.log("last line of provider", value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const fakeAuth = (): Promise<UserToken> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ token: "2342f2f1d131rf12" }), 250);
  });
