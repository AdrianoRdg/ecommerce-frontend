import { Category } from "./Category";

export interface Product {
  id: number;
  name: string;
  sku: string;
  categoryId: number;
  category: Category;
  description: string;
  largeDescription: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
  isNew: boolean;
  imageLink: string;
  otherImagesLink: string;
  createdDate: Date;
  updatedDate?: Date;
}
