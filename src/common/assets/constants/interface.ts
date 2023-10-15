export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  loginRegister: string;
  emailRegister: string;
  passwordRegister: string;
  passwordRepeat: string;
}

export interface IUser {
  email: string;
  password: string;
  userId: number;
  userName: string;
  roles: IRoles[];
}

export interface IRoles {
  roleId: number;
  name: string;
}

export interface INewProject {
  customer: string;
  name: string;
  dataStart: string;
  dataFinish: string;
  description: string;
}

export interface IProject {
  customer: string;
  name: string;
  projectId: number;
  dataStart: string;
  dataFinish: string;
  description: string;
  users: IUser[];
}

interface IStatus {
  status: string;
  dateTimeChange: string;
}

export interface ITask {
  taskId: number;
  name: string;
  description: string;
  priority: string;
  statusHistories: IStatus[];
  dataStart: string;
  dataFinish: string;
  project: IProject;
  user: IUser;
}

export interface INewTask {
  name: string;
  description: string;
  priority: string;
  dataStart: string;
  dataFinish: string;
  projectId: number;
}

export interface IEditTask {
  name: string;
  description: string;
  priority: string;
  dataStart: string;
  dataFinish: string;
  projectId: number;
  status: string;
  userEmail: string;
}

export interface IAddONProject {
  email: string;
}

export interface IDashboardTask {
  name: string;
  priority: string;
  description: string;
  dateStart: string;
  dateEnd: string;
}

export interface IDashboardProject {
  name: string;
  quantity: number;
  dateStart: string;
  dateEnd: string;
}
