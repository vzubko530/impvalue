import { BaseDTO } from './Base';
import { UserDTO } from './User';

export interface ProductDTO extends BaseDTO {
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  seller: UserDTO;
}

export interface CreateProductDTO {
  title: string;
  description: string;
  price: number;
  categorySlug: string;
  subcategorySlug: string;
}
