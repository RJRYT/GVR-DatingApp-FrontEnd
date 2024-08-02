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
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
