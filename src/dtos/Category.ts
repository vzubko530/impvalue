import { BaseDTO } from './Base';
import { SubcategoryDTO } from './Subcategory';

export interface CategoryDTO extends BaseDTO {
  name: string;
  slug: string;
}

export interface CategoryWithSubsDTO extends CategoryDTO {
  subcategories: SubcategoryDTO[];
}

export type CreateCategoryDTO = Omit<CategoryDTO, '_id' | 'subcategories'>;
