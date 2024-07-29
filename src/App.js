import React, { Suspense } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginWelcome from "./components/Login/Welcome";

function App() {
  return (
    <section className="page-content">
      <main className='container'>
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
