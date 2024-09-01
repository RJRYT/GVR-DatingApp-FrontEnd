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
        console.log("[Server]: Connection established");
      });

      newSocket.on("connect_error", (error) => {
        if(newSocket.active){
          console.log("[Server]: A temporary failure occoured. will reconnect.");
        }else{
          console.log("[Server]: An error occoured on connection ",error);
        }
      });

      newSocket.on("disconnect", (reason, details) => {
        console.log("[Server]: Disconnected...!");
        console.log("[Server]: reason: ", reason);
      });

      newSocket.onAny((eventname, ...args)=>{
        console.log(`[Server]: Event triggered: ${eventname} `,...args);
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
