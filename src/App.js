import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";
import Layout from "./components/Layout/Main";
import DefaultPage from "./components/Default";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/Layout/Dashboard";
import Matches from "./components/Matches";
import NotFound from "./components/NotFound";
import DiscoverHeader from "./components/Dashboard/Discover";
import UserProfile from "./components/Dashboard/UserProfile";
import Filter from "./components/Filter/Filter";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <ToastContainer newestOnTop={true} theme="colored" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<DefaultPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/dashboard/discover"
                  element={<DiscoverHeader title="Discover" />}
                />
                <Route
                  path="/dashboard/matches"
                  element={<Matches title="Matches" />}
                />
                <Route
                  path="/dashboard/matches/qualification"
                  element={<Matches title="Qualification" />}
                />
                <Route
                  path="/dashboard/matches/location"
                  element={<Matches title="Location" />}
                />
                <Route
                  path="/dashboard/matches/designation"
                  element={<Matches title="Designation" />}
                />
                <Route
                  path="/dashboard/matches/my"
                  element={
                    <Matches title="Viewed my profile" profileView={true} />
                  }
                />
                <Route
                  path="/dashboard/matches/upgrade"
                  element={<Matches upgrade={true} />}
                />
                <Route path="/dashboard/filter" element={<Filter />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/userprofile" element={<UserProfile />} />
            
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
