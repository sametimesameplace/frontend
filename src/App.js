import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./pages";
import { LandingPage } from "./pages";
import { ProfilePage } from "./pages";
import { Login, Register } from "./pages";
import { AddTimePlaceForm } from "./pages/dashboard/timeplace/AddTimePlaceForm";

import "./App.css";

import { UserProvider } from "./auth/AuthContext";
import { appPath, apiPath } from "./api/paths";
import { ErrorPage } from "./pages/errors";

export const AppWrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={appPath.dashboard} element={<Dashboard />} />
        <Route path={appPath.profile} element={<ProfilePage />} />
        <Route path={appPath.login} element={<Login />} />
        <Route path={appPath.register} element={<Register />} />
        <Route path={appPath.add_timeplace} element={<AddTimePlaceForm />} />
        <Route path={appPath.error}>
            <Route path=":error" element={<ErrorPage/>}/>
        </Route>
            </Routes>
    </Router>
  );
}

export default App;
