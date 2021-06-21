export class BannerResonse{
  error: number;
  message: string;
  data: Banner;
}
export class Banner{
  id: number;
  name: string;
  link:string;
  images:string;
  create_time:Date;
  status:number;
  type:number;
  description:string
}
