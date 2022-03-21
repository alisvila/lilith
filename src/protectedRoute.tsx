import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

import { Auth } from "./auth";
import { useAuth } from "./components/hooks/useAuth";

type child = {
  children: JSX.Element;
};

export default function ProtectedRoute({ children }: child) {
  const { token }: Auth = useAuth();
  console.log(!token?.token, 'this inside protected route')

  if (!token?.token) {
    return <Navigate to="/home" replace />;
  }

  return children;
}
