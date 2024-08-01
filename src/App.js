import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginWelcome from "./components/Login/Welcome";
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
