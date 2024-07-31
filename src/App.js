import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import LoginWelcome from "./components/Login/Welcome";

function App() {
  return (
    <AuthProvider>
      <ToastContainer newestOnTop={true} theme="colored" />
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
    </AuthProvider>
  );
}

export default App;
