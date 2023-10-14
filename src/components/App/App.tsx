import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import '../Page/_Page.scss';
import '../../layout/Style/Content/_Content.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Tasks from '../Main/Tasks/Tasks';
import Dashboard from '../Dashboard/Dashboard';
import PersonalArea from '../Main/PersonalArea/PersonalArea';
import NewTask from '../Main/NewTask/NewTask';
import Project from '../Main/Project/Project';
import NewProject from '../Main/NewProject/NewProject';
import PageNotFound from '../PageNotFound/PageNotFound';
import { autorization, checkToken, getUserProject, getUserTask } from '../../utils/Api/MainApi';
import { ILogin, IProject, ITask } from '../../common/assets/constants/interface';
import ProtectedRoute from '../../utils/hooks/ProtectedRoute';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  console.log(loggedIn);
  // console.log(tasks);
  // console.log(projects);
  const navigate = useNavigate();

  const cbCheckToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    cbCheckToken();
  }, []);

  const handleLogin = (data: ILogin) => {
    autorization(data)
      .then(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
          console.log(token);
          setLoggedIn(true);
          navigate('/', { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   Promise.all([getUserTask(), getUserProject()])
  //     .then(([dataTask, dataProject]) => {
  //       setTasks(dataTask);
  //       setProjects(dataProject);
  //     })
  //     .catch((err) => console.log(err));
  // }, [window.onload]);

  return (
    <div className="page">
      <Menu loggedIn={ loggedIn } />
      <main className="content">
        <Header loggedIn={ loggedIn } />
        <Routes>
          <Route
            path="/tasks"
            element={ (
              <ProtectedRoute
                path="/tasks"
                element={ <Tasks /> }
                loggedIn={ loggedIn }
              />
            ) }
          />
          <Route
            path="/newtask"
            element={ (
              <ProtectedRoute
                path="/newtask"
                element={ <NewTask /> }
                loggedIn={ loggedIn }
              />
            ) }
          />
          <Route
            path="/projects"
            element={ <Project /> }
          />
          <Route
            path="/newproject"
            element={ (
              <ProtectedRoute
                path="/newproject"
                element={ <NewProject /> }
                loggedIn={ loggedIn }
              />
            ) }
          />
          <Route
            path="/"
            element={ (
              <Dashboard />
            ) }
          />
          <Route
            path="/profile"
            element={ (
              <ProtectedRoute
                path="/profile"
                element={ <PersonalArea /> }
                loggedIn={ loggedIn }
              />
            ) }
          />
          <Route
            path="/login"
            element={ (
              <Login
                onLogin={ handleLogin }
              />
            ) }
          />
          <Route
            path="/register"
            element={ (
              <Register />
            ) }
          />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </main>
    </div>
  );
};

export default App;
