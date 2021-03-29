export class ProductGroupResonse{
  error: number;
  message: string;
  data: ProductGroup;
}
export class ProductGroup{
  id: number;
  name: string;
  created_time: Date;
}
 export class MadeInResonse{
  error: number;
  message: string;
  data: MadeIn;
 }
 export class MadeIn{
  id: number;
  name: string;
  created_time: Date;
 }
 export class BrandResonse{
  error: number;
  message: string;
  data: Brand;
 }
 export class Brand{
  id: number;
  name: string;
  created_time: Date;
 }
