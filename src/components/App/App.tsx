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
import { autorization, checkToken, getUserInfo, getUserProject, getUserTask } from '../../utils/Api/MainApi';
import { ILogin, IProject, ITask, IUser } from '../../common/assets/constants/interface';
import EditTask from '../Main/NewTask/EditTask/EditTask';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const navigate = useNavigate();

  const cbCheckToken = () => {
    setIsLoading(true);
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
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

  useEffect(() => {
    Promise.all([getUserTask(), getUserProject(), getUserInfo()])
      .then(([res, projectRes, userRes]) => {
        setTasks(res);
        setProjects(projectRes);
        setUser(userRes);
      })
      .catch((err) => console.log(err));
  }, [window.onload]);

  return (
    <div className="page">
      <Menu
        user={ user }
        loggedIn={ loggedIn }
        setLoggedIn={ setLoggedIn }
      />
      <main className="content">
        <Header loggedIn={ loggedIn } />
        <Routes>
          <Route
            path="/tasks"
            element={ (
              <Tasks
                user={ user }
                project={ projects }
                tasks={ tasks }
              />
            ) }
          />
          <Route
            path="/newtask"
            element={ (
              <NewTask
                project={ projects }
              />
            ) }
          />
          <Route
            path="/projects"
            element={ (
              <Project
                project={ projects }
              />
            ) }
          />
          <Route
            path="/newproject"
            element={ (
              <NewProject
                loggedIn={ loggedIn }
              />
            ) }
          />
          <Route
            path="/"
            element={ <Dashboard /> }
          />
          <Route
            path="/profile"
            element={ (
              <PersonalArea
                user={ user }
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
            element={ <Register /> }
          />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
      </main>
    </div>
  );
};

export default App;
