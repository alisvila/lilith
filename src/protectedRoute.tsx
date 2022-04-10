import React, { ReactElement } from "react";
import {useStore, useDispatch, useSelector} from 'react-redux'
import { authActions } from "./store/auth";

import { Navigate } from "react-router-dom";
import { ROLE } from "./enums/roles";

import { User } from "./auth";
import { useAuth } from "./components/hooks/useAuth";

type child = {
  children: JSX.Element;
};

export default function ProtectedRoute({
  children,
  roles,
  next,
}: {
  children: JSX.Element;
  roles: Array<string>;
  next?: string;
}) {
  // const { token, role }: User = useAuth();
  // const dispatch = useDispatch();
  // const store = useStore();
  const auth = useSelector((state: any) => state.auth);

  const checkRole =
    roles.includes("all") || roles.includes(auth.role) ? true : false;

  if (auth.isLoggedIn || !checkRole) {
    return <Navigate to={`/home?next=${next}`} replace />;
  }

  return children;
}
