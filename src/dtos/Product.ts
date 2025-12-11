import { BaseDTO } from './Base';
import { CategoryDTO } from './Category';
import { SubcategoryDTO } from './Subcategory';
import { UserDTO } from './User';

export interface ProductDTO extends BaseDTO {
  title: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  seller: UserDTO;
}

export interface SellerProductDTO {
  categories: Array<
    CategoryDTO & {
      subcategories: Array<SubcategoryDTO> & {
        products: Array<Omit<ProductDTO, 'seller'>>;
      };
    }
  >;
}

export interface CreateProductDTO {
  title: string;
  description: string;
  price: number;
  categorySlug: string;
  subcategorySlug: string;
}
