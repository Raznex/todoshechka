export interface IInput {
  id: string;
  label: string;
  span: string;
  type: string;
  placeholder: string;
  errors: any;
}

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

export interface ITask {
  nameTask: string;
  priority: string;
  descriptionTask: string;
  dateStartTask: string;
  dateEndTask: string;
}

export interface INewTask {
  nameNewTask: string;
  descriptionNewTask: string;
  dateStartNewTask: string;
  dateEndNewTask: string;
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

export interface INewProject {
  nameNewProject: string;
  descriptionNewProject: string;
  dateStartNewProject: string;
  dateEndNewProject: string;
  participantsNewProject: string;
  clientNewProject: string;
}
