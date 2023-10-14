// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import { ILogin, IProject, ITask } from '../../common/assets/constants/interface';


const baseURL = 'https://pre-hack-production.up.railway.app';

export async function getUserTask(): Promise<ITask[]> {
  try {
    const res = await axios.get(`${baseURL}/secure/tasks`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    });
    return res.data.tasks;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getUserProject(): Promise<IProject[]> {
  try {
    const res = await axios.get(`${baseURL}/secure/projects`, {
      headers: { authorization: `Bearer ${localStorage.getItem('jwt')}` },
    });
    return res.data.projects;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const checkToken = async (jwt: string) => {
  try {
    const res = await axios.get(`${baseURL}/users/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const autorization = async (body: ILogin) => {
  try {
    const res = await axios.post(`${baseURL}/authentication`, body);
    localStorage.setItem('jwt', res.data.token);
  } catch (err) {
    console.log(err);
  }
};
