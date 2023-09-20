import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routergp from "./router";
import "./App.css";
import DashLayout from "./pages/layouts";
// import AuthProvider, { User } from "./auth";

function App() {
  return (
    <Router>
      <DashLayout>
        <Routergp />
      </DashLayout>
    </Router>
  );
}

export default App;
