export class ProductGroupResonse {
  error: number;
  message: string;
  data: ProductGroup;
}
export class ProductGroup {
  id: number;
  name: string;
  created_time: Date;
}
export class MadeInResonse {
  error: number;
  message: string;
  data: MadeIn;
}
export class MadeIn {
  id: number;
  name: string;
  created_time: Date;
}
export class BrandResonse {
  error: number;
  message: string;
  data: Brand;
}
export class Brand {
  id: number;
  name: string;
  created_time: Date;
}

export class ProductResonse {
  error: number;
  message: string;
  data: Product;
}
export class Product {
  id: number;
  name: string;
  link: string;
  group_id: number;
  made_in_id: number;
  brand_id: number;
  description: string;
  detail: string;
  price: number;
  price_sale: number;
  images: string;
  list_images: string;
  type: number;
  count: number;
  status: number;
  create_time: Date;
}
export class APIProductResponse {
  error: number;
  message: string;
  data: APIProduct;
}
export class APIProduct {
  id: number;
  name: string;
  link: string;
  group_id: number;
  made_in_id: number;
  brand_id: number;
  description: string;
  detail: string;
  price: number;
  price_sale: number;
  images: string;
  list_images: string;
  count: number;
  status: number;
  type:number;
  create_time: Date;
  parent_link: string;
  name_group: string;
  name_brand: string;
  name_made: string
}
