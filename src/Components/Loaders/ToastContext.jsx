// ToastContext.js
import React, { createContext, useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContext = createContext();

// Create a provider component
export const ToastProvider = ({ children }) => {
  const notifySuccess = (message, options = {}) => toast.success(message, options);
  const notifyError = (message, options = {}) => toast.error(message, options);
  const notifyInfo = (message, options = {}) => toast.info(message, options);
  const notifyWarn = (message, options = {}) => toast.warn(message, options);
  const [waitingLoader, setWaitingLoader] = useState(false);

  const startWaitingLoader = () => {
    setWaitingLoader(true)
  }

  const stopWaitingLoader = () => {
    setWaitingLoader(false)
  }

  return (
    <ToastContext.Provider value={{ notifySuccess, notifyError, notifyInfo, notifyWarn,  waitingLoader, startWaitingLoader, stopWaitingLoader }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Custom hook for using toast context
export const useToast = () => useContext(ToastContext);