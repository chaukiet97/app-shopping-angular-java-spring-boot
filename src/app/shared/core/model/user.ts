export class UsersResonse {
  error: number;
  message: string;
  data: Users;
}
export class Users {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  name: string;
  password_hash: string;
  phone: string;
  sex: number;
  brithday: Date;
}
