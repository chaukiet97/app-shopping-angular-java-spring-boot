export class ContentGroupResonse{
  error: number;
  message: string;
  data: ContentGroup;
}
export class ContentGroup{
  id: number;
  name: string;
  link: string;
  create_time:Date
}

export class ContentResonse{
  error: number;
  message: string;
  data: Content;
}
export class Content{
  id: number;
  name: string;
  link: string;
  group_id: number;
  images: string;
  detail:string;
  description:string;
  status:number;
  create_time:Date
}

