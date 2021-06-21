export class WebsiteResonse{
  error: number;
  message: string;
  data: Website;
}
export class Website{
  id: number;
  title: string;
  link:string;
  logo:string;
  shortcut:string;
  description:string
}
