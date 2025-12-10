import { BaseDTO } from './Base';

export interface ProductDTO extends BaseDTO {
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  seller: string;
}

export interface CreateProductDTO {
  title: string;
  description: string;
  price: number;
  categorySlug: string;
  subcategorySlug: string;
}
