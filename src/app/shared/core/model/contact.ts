export class ContactResonse{
  error: number;
  message: string;
  data: Contact;
}
export class Contact{
  id: number;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  day_send: Date;
  reply:string;
  day_reply:Date;
  maker_id:number;
  status:number;
}
