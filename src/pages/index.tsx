import React, { useEffect } from "react";
import { useAuth } from "../components/hooks/useAuth";
import { User } from "../auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function Home() {
  const { onLogin, token }: User = useAuth();

  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <>
      <Navigation />

      <div>index</div>

      {!token?.token && (
        <button type="button" onClick={onLogin}>
          Sign In
        </button>
      )}
    </>
  );
}

const Navigation = () => {
  const { onLogout, token }: User = useAuth();

  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {token?.token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};
