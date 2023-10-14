import React, { useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';


interface ProtectedRouteProps {
  loggedIn: boolean;
  path: string;
  element: React.ReactElement; // Компонент для отображения, если авторизован
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ loggedIn, path, element }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  if (loggedIn) {
    return <Route path={ path } element={ element } />;
  }
  navigate('/login');
  return null;
};

export default ProtectedRoute;
