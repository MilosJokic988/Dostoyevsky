import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    // Nije ulogovan → preusmeri na login
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default ProtectedRoute;
