import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { AdminProvider } from "./contexts/AdminContext";
import { SocketProvider } from "./contexts/SocketContext";
import Routing from "./routing";
import AdminRouting from "./routing/adminRoutes";
import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ToastContainer newestOnTop={true} theme="colored" />
        <Routes>
          <Route
            path="/admin/*"
            element={
              <AdminProvider>
                <AdminRouting />
              </AdminProvider>
            }
          />
          <Route
            path="/*"
            element={
              <AuthProvider>
                <SocketProvider>
                  <Routing />
                </SocketProvider>
              </AuthProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
