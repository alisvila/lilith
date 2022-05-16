import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Authenticate, useUserIdentity } from "react-oidc-client";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard/index";
import NoMatch from "./pages/noMatch";
import AuthProvider, { User } from "./auth";
import { useAuth } from "./components/hooks/useAuth";
import ProtectedRoute from "./protectedRoute";
import AccountSettings from "./pages/dashboard/users/accountSettings";
import { RotateLeft } from "@mui/icons-material";
import Customers from "./pages/customers";
import Meal from "./pages/dashboard/meal";
import Illnes from "./pages/dashboard/illnes";
import Visit from "./pages/dashboard/visit";
import Discount from "./pages/dashboard/Discount";
import FoodCategory from "./pages/dashboard/FoodCategory";
import DashLayout from "./pages/layouts/dashboard";
import FoodGrid from "./pages/dashboard/FoodGrid";
import PayMethod from "./pages/dashboard/PayMethod";
import Ticket from "./pages/dashboard/Ticket";
import CreateDoctor from "./pages/dashboard/CreateDoctor";
import DocPatients from "./pages/dashboard/DocPatients";
import PatientDetail from "./pages/dashboard/PatientDetail";
import MessageHistory from "./pages/MessageHistory";

function App() {
  return (
    <Router>
      {/* <Authenticate
        // LoadingComponent={LoadingComponent}
        loginCompletePath="/my_login_complete_path"
        logoutPath="/my_logout_path"
        userManagerSettings={{
          loadUserInfo: true,
          userStore: new WebStorageStateStore({
            store: localStorage,
          }),
          authority: "http://localhost:5000",
          client_id: "JAVASCRIPT_CLIENT_ID",
          redirect_uri: "http://localhost:3000/my_login_complete_path",
          response_type: "id_token token",
          response_mode: "fragment",
          scope: "openid profile", // add other scopes here
          post_logout_redirect_uri: "http://localhost:3000/my_logout_path",
        }}
      > */}
      <AuthProvider>
        <DashLayout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute roles={["admin", "all"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/meal"
              element={
                <ProtectedRoute roles={["admin", "all"]}>
                  <Meal />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/settings"
              element={
                <ProtectedRoute roles={["all"]}>
                  <AccountSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/Illnes"
              element={
                <ProtectedRoute roles={["all"]}>
                  <Illnes />
                </ProtectedRoute>
              }
            />
            <Route
              path="visit"
              element={
                <ProtectedRoute roles={["all"]}>
                  <Visit />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/customers"
              element={
                <ProtectedRoute roles={["all"]}>
                  <Customers />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/Discount"
              element={
                <ProtectedRoute roles={["all"]}>
                  <Discount />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/FoodCategory"
              element={
                <ProtectedRoute roles={["all"]}>
                  <FoodCategory />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/FoodGrid"
              element={
                <ProtectedRoute roles={["all"]}>
                  <FoodGrid />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/payMethod"
              element={
                <ProtectedRoute roles={["all"]}>
                  <PayMethod />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/sendtiket"
              element={
                <ProtectedRoute roles={["all"]}>
                  <Ticket />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/doc/create"
              element={
                <ProtectedRoute roles={["all"]}>
                  <CreateDoctor />
                </ProtectedRoute>
              }
            />
                        <Route
              path="dashboard/doc/edit/:id"
              element={
                <ProtectedRoute roles={["all"]}>
                  <CreateDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/doc/:id"
              element={
                <ProtectedRoute roles={["all"]}>
                  <DocPatients />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/patient"
              element={
                <ProtectedRoute roles={["all"]}>
                  <DocPatients />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/patient/create"
              element={
                <ProtectedRoute roles={["all"]}>
                  <CreateDoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard/patient/:id"
              element={
                <ProtectedRoute roles={["all"]}>
                  <PatientDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/history"
              element={
                <ProtectedRoute roles={["all"]}>
                  <MessageHistory />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </DashLayout>
      </AuthProvider>
      {/* </Authenticate> */}
    </Router>
  );
}

export default App;
