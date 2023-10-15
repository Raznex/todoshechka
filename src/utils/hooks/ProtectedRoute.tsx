import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


interface IProps {
  loggedIn: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({ loggedIn }) => (loggedIn ? <Outlet /> : <Navigate to="/login" />);

export default ProtectedRoute;
