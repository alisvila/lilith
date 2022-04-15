import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard/index";
import NoMatch from "./pages/noMatch";
import AuthProvider, { User } from "./auth";
import { useAuth } from "./components/hooks/useAuth";
import ProtectedRoute from "./protectedRoute";
import AccountSettings from "./pages/accountSettings";
import { RotateLeft } from "@mui/icons-material";
import Customers from "./pages/customers";
import Meal from "./pages/dashboard/meal";
import Illnes from './pages/dashboard/illnes';
import Visit from './pages/dashboard/visit'


function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <Navigation /> */}

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
              <ProtectedRoute  roles={["all"]}>
                <AccountSettings />
              </ProtectedRoute>
            }
          />
            <Route
            path="Illnes"
            element={
              <ProtectedRoute  roles={["all"]}>
                <Illnes />
              </ProtectedRoute>
            }
          />
            <Route
            path="visit"
            element={
              <ProtectedRoute  roles={["all"]}>
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

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
