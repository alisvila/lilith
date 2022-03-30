import React, { ReactElement } from "react";
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
  const { token, role }: User = useAuth();

  const checkRole =
    roles.includes("all") || roles.includes(role) ? true : false;

  if (!token?.token || !checkRole) {
    return <Navigate to={`/home?next=${next}`} replace />;
  }

  return children;
}
