import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SocketProvider } from "./contexts/SocketContext";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import Routing from "./routing";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <SocketProvider>
          <ToastContainer newestOnTop={true} theme="colored" />
          <Routing />
        </SocketProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;