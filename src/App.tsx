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
import Illnes from "./pages/dashboard/illnes";
import Discount from "./pages/dashboard/Discount";
import FoodCategory from "./pages/dashboard/FoodCategory";
import DashLayout from "./pages/layouts/dashboard";
import FoodGrid from "./pages/dashboard/FoodGrid";

function App() {
  return (
    <Router>
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

          <Route path="*" element={<NoMatch />} />
        </Routes>
        </DashLayout>
      </AuthProvider>
    </Router>
  );
}

export default App;
