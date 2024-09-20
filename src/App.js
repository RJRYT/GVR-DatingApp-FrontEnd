import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SocketProvider } from "./contexts/SocketContext";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import Routing from "./routing";
import { AdminProvider } from "./contexts/AdminContext";
import AdminRouting from "./routing/adminRoutes";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <SocketProvider>
          <ToastContainer newestOnTop={true} theme="colored" />
          <Routing />
        </SocketProvider>
      </AuthProvider>
      <AdminProvider>
        <ToastContainer newestOnTop={true} theme="colored" />
        <AdminRouting />
      </AdminProvider>
    </Suspense>
  );
}

export default App;