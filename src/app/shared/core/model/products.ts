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
