import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard/index";
import NoMatch from "./pages/NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import AccountSettings from "./pages/dashboard/AccountSettings";
// import Customers from "./pages/customers";
import Meal from "./pages/meal";
import Illnes from "./pages/dashboard/Illness";
// import Visit from "./pages/dashboard/visit";
// import Discount from "./pages/dashboard/doc/Discount";
// import FoodCategory from "./pages/dashboard/FoodCategory";
// import FoodGrid from "./pages/dashboard/FoodGrid";
// import PayMethod from "./pages/dashboard/PayMethod";
// import Ticket from "./pages/dashboard/Ticket";
// import CreateDoctor from "./pages/dashboard/CreateDoctor";
// import DocPatients from "./pages/dashboard/DocPatients";
// import PatientDetail from "./pages/dashboard/PatientDetail";
// import MessageHistory from "./pages/MessageHistory";
// import CreatePatient from "./components/ui-comp/patient/CreatePatient";
// import Disease from "./pages/dashboard/disease/DiseaseList";
// import DiseaseSubGrp from "./pages/dashboard/disease/DiseasSubGrp";
// import MedicinList from "./pages/dashboard/MedicinList";
// import VisitPrice from "./pages/dashboard/doc/VisitPrice";
// import Prescription from "./pages/dashboard/Prescription";

export default function router() {
  return (
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
      {/* <Route path="dashboard" element={<Dashboard />} /> */}

      <Route
        path="dashboard/meal"
        element={
          <ProtectedRoute>
            <Meal />
          </ProtectedRoute>
        }
      />
     
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <AccountSettings />
          </ProtectedRoute>
        }
      />
      {
        <Route
          path="dashboard/Illnes"
          element={
            <ProtectedRoute>
              <Illnes />
            </ProtectedRoute>
          }
        />
        /*
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
        path="sendtiket"
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
        path="dashboard/doc/:id/patient/create"
        element={
          <ProtectedRoute roles={["all"]}>
            <CreatePatient />
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
      <Route
        path="dashboard/diseas"
        element={
          <ProtectedRoute roles={["all"]}>
            <Disease />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
      <Route
        path="dashboard/disease/type/:id"
        element={
          <ProtectedRoute roles={["all"]}>
            <DiseaseSubGrp />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/medicins"
        element={
          <ProtectedRoute roles={["all"]}>
            <MedicinList />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/visit/price"
        element={
          <ProtectedRoute roles={["all"]}>
            <VisitPrice />
          </ProtectedRoute>
        }
      />

      <Route
        path="Patient/:patientId/Checkup/:checkupId/Prescription"
        element={
          <ProtectedRoute roles={["all"]}>
            <Prescription />
          </ProtectedRoute>
        }
      /> */
      }

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
