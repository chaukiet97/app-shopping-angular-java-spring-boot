export class PageGroupResonse{
  error: number;
  message: string;
  data: PageGroup;
}
export class PageGroup{
  id: number;
  name: string;
  created_time: Date;
}
export class PageResonse{
  error: number;
  message: string;
  data: Page;
}
export class Page{
  id: number;
  name: string;
  link: string;
  group_id: number;
  detail: string;
  type: number;
  description: string;
  status:number;
  create_time:Date;
}

