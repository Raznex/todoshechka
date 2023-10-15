// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import { IAddONProject, IEditTask, ILogin, INewProject, INewTask } from '../../common/assets/constants/interface';


const baseURL = 'https://pre-hack-production.up.railway.app';

export async function getUserTask() {
  try {
    const res = await axios.get(`${baseURL}/secure/tasks/tasks`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getUserProject() {
  try {
    const projectRes = await axios.get(`${baseURL}/secure/projects`, {
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    });
    return projectRes.data;
  } catch (err) {
    throw err;
  }
}

export const checkToken = async (jwt: string) => {
  try {
    const res = await axios.get(`${baseURL}/users/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getUserInfo = async () => {
  try {
    const userRes = await axios.get(`${baseURL}/users/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
    return userRes.data;
  } catch (err) {
    throw err;
  }
};

export const autorization = async (body: ILogin) => {
  try {
    const res = await axios.post(`${baseURL}/authentication`, body);
    localStorage.setItem('jwt', res.data.token);
  } catch (err) {
    throw err;
  }
};

export const postNewProject = async (body: INewProject) => {
  try {
    const res = await axios.post(`${baseURL}/secure/projects`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  } catch (err) {
    throw err;
  }
};

export const postNewTask = async (body: INewTask) => {
  try {
    const res = await axios.post(`${baseURL}/tasks`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const putTask = async (body: IEditTask, taskId: number) => {
  try {
    const res = await axios.put(`${baseURL}/secure/tasks/task/${taskId}`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = async (taskId: number) => {
  try {
    const res = await axios.delete(`${baseURL}/secure/tasks/task/${taskId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const addOnProject = async (body: IAddONProject, projectId: number) => {
  try {
    const res = await axios.patch(`${baseURL}/secure/projects/${projectId}/user`, body, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
