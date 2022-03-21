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
import AuthProvider, { Auth } from './auth';
import { useAuth } from './components/hooks/useAuth';
import ProtectedRoute from './protectedRoute';

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
              <ProtectedRoute>
                <Dashboard />
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
