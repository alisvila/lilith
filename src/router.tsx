import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard/index";
import NoMatch from "./pages/NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import AccountSettings from "./pages/dashboard/AccountSettings";
import DoctorList from "./pages/DoctorsList";
import Meal from "./pages/meal";
import Illnes from "./pages/dashboard/Illness";
import Visit from "./pages/visit";
import Discount from "./pages/discount";
import FoodCategory from "./pages/foodCategory";
import FoodGrid from "./pages/foodGrid";
import PayMethod from "./pages/payMethod";
import Ticket from "./pages/ticket";
import CreateDoctor from "./pages/createDoctor";
import DocPatients from "./pages/docPatients";
import PatientDetail from "./pages/patientDetail";
import MessageHistory from "./pages/messageHistory";
import CreatePatient from "./pages/createPatient";
import Disease from "./pages/disease/DiseaseList";
import DiseaseSubGrp from "./pages/disease/diseaseSubGrp";
import MedicinList from "./pages/medicinList";
import VisitPrice from "./pages/visitPrice";
import Prescription from "./pages/prescription";

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
        <Route
          path="dashboard/Illnes"
          element={
            <ProtectedRoute>
              <Illnes />
            </ProtectedRoute>
          }
          />
      <Route
        path="visit"
        element={
          <ProtectedRoute>
            <Visit />
          </ProtectedRoute>
        }
        />

      <Route
        path="dashboard/doctorlist"
        element={
          <ProtectedRoute>
            <DoctorList />
          </ProtectedRoute>
        }
        />

      <Route
        path="dashboard/Discount"
        element={
          <ProtectedRoute>
            <Discount />
          </ProtectedRoute>
        }
      />

      <Route
        path="dashboard/FoodCategory"
        element={
          <ProtectedRoute>
            <FoodCategory />
          </ProtectedRoute>
        }
        />

      <Route
        path="dashboard/FoodGrid"
        element={
          <ProtectedRoute >
            <FoodGrid />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/payMethod"
        element={
          <ProtectedRoute >
            <PayMethod />
          </ProtectedRoute>
        }
      />
      <Route
        path="sendtiket"
        element={
          <ProtectedRoute >
            <Ticket />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/doc/create"
        element={
          <ProtectedRoute >
            <CreateDoctor />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/doc/edit/:id"
        element={
          <ProtectedRoute >
            <CreateDoctor />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/doc/:id"
        element={
          <ProtectedRoute >
            <DocPatients />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/patient"
        element={
          <ProtectedRoute >
            <DocPatients />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/doc/:id/patient/create"
        element={
          <ProtectedRoute >
            <CreatePatient />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/patient/:id"
        element={
          <ProtectedRoute >
            <PatientDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/history"
        element={
          <ProtectedRoute >
            <MessageHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/diseas"
        element={
          <ProtectedRoute >
            <Disease />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NoMatch />} />
      <Route
        path="dashboard/disease/type/:id"
        element={
          <ProtectedRoute >
            <DiseaseSubGrp />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/medicins"
        element={
          <ProtectedRoute >
            <MedicinList />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard/visit/price"
        element={
          <ProtectedRoute >
            <VisitPrice />
          </ProtectedRoute>
        }
      />

      <Route
        path="Patient/:patientId/Checkup/:checkupId/Prescription"
        element={
          <ProtectedRoute >
            <Prescription />
          </ProtectedRoute>
        }
      /> 
      

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
