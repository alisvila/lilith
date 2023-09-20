import React, { useEffect } from "react";
// import { useAuth } from "../components/hooks/useAuth";
// import { User } from "../auth";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStore } from "react-redux";

// import { authActions } from "../store/auth";

export default function Home() {
  // const { onLogin, token }: User = useAuth();

  const dispatch = useDispatch();
  // const store = useStore();

  const loginHandler = () => {
    fakeAuth().then((token) => {});
    // dispatch(authActions.login({}));
  };

  const fakeAuth = () =>
    new Promise((resolve: any) => {
      setTimeout(() => resolve({ token: "2342f2f1d131rf12" }), 250);
    });

  useEffect(() => {
    // console.log(token);
  }, []);

  return (
    <>
      <Navigation />

      <div>index</div>

      {/* {!token?.token && (
        <button type="button" onClick={onLogin}>
          Sign In
        </button>
      )} */}
    </>
  );
}

const Navigation = () => {
  // const { onLogout, token }: User = useAuth();

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>

      {/* {token?.token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )} */}
    </nav>
  );
};
