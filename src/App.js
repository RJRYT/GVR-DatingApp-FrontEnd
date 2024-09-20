import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
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
        <AdminProvider>
          <ToastContainer newestOnTop={true} theme="colored" />
          <AdminRouting />
        </AdminProvider>
        <AuthProvider>
          <SocketProvider>
            <ToastContainer newestOnTop={true} theme="colored" />
            <Routing />
          </SocketProvider>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
