export interface Product {
  id: number;
  imageLink: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  isNew: boolean;
}
