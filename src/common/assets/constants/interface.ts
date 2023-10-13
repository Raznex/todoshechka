export interface ITask {
  id: number;
  name: string;
  status: string;
}
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
