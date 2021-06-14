export class WebsiteResonse {
  error: number;
  message: string;
  data: Website;
}
export class Website {
  id: number;
  logo: string;
  shortcut: string;
  title: string;
  description: string
}
export class BannerResonse {
  error: number;
  message: string;
  data: Banner;
}
export class Banner {
  id: number;
  link: string;
  images: string;
  type: number;
  description: string;
  status: number;
  create_time: Date;
}
