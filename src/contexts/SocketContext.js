import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { AuthContext } from './AuthContext';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const { authState } = useContext(AuthContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (authState.isAuthenticated) {
      const newSocket = io(process.env.REACT_APP_API_URL, {
        withCredentials: true,
      });

      setSocket(newSocket);

      newSocket.on("connect", () => {
        console.log("Connected to the server");
      });

      newSocket.on("disconnect", () => {
        console.log("Disconnected from the server");
      });

      return () => newSocket.close();
    }
  }, [authState]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
