import React from "react";

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  next,
}: {
  children: JSX.Element;
  next?: string;
}) {
  // const { token, role }: User = useAuth();
  // const dispatch = useDispatch();
  // const store = useStore();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   const userAuth= localStorage.getItem("userAuth");

  //   const checkRole=
  //     roles.includes("all") || roles.includes(userAuth) ? true : false;

  //   if (isLoggedIn) {
  //     return <Navigate to={`/home?next=${next}`} replace />;
  //   }

  return children;
}
