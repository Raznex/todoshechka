import React from 'react';

import '../Page/_Page.scss';
import '../../layout/Style/Content/_Content.scss';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';

import { Route, Routes } from 'react-router-dom';

import Tasks from '../Main/Tasks/Tasks';
import Dashboard from '../Dashboard/Dashboard';
import PersonalArea from '../Main/PersonalArea/PersonalArea';
import NewTask from '../Main/NewTask/NewTask';
import Project from '../Main/Project/Project';
import NewProject from '../Main/NewProject/NewProject';


const App = () => (
  <div className="page">
    <Menu />
    <main className="content">
      <Header />
      <Routes>
        <Route
          path="/tasks"
          element={ (
            <Tasks />
          ) }
        />
        <Route
          path="/newtask"
          element={ (
            <NewTask />
          ) }
        />
        <Route
          path="/projects"
          element={ (
            <Project />
          ) }
        />
        <Route
          path="/newproject"
          element={ (
            <NewProject />
          ) }
        />
        <Route
          path="/dashboard"
          element={ (
            <Dashboard />
          ) }
        />
        <Route
          path="/profile"
          element={ (
            <PersonalArea />
          ) }
        />
        <Route
          path="/login"
          element={ (
            <Login />
          ) }
        />
        <Route
          path="/register"
          element={ (
            <Register />
          ) }
        />
        { /* <Route path="*" element={ <PageNotFound /> } /> */ }
      </Routes>
    </main>
  </div>
);

export default App;
