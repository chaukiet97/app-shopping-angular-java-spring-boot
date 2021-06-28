export class CustomerResonse {
  error: number;
  message: string;
  data: Customer;
}
export class Customer {
  id: number;
  name: string;
  create_time: Date;
  status: number;
  email: string;
  phone: string;
  sex: number;
  brithday: Date;
  address: string;
  password: string
}
