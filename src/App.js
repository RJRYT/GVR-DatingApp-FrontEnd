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
    <section className="page-content font-sans">
      <main className='container mx-auto p-4 max-w-[600px]'>
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navigate to="/login" />} />
              <Route path='/login' element={<LoginWelcome />} />

            </Routes>
          </BrowserRouter>
        </Suspense>
      </main>
    </section>
  );
}

export default App;
