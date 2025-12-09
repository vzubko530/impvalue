import { BaseDTO } from "./Base";
import { SubcategoryDTO } from "./Subcategory";

export interface CategoryDTO extends BaseDTO {
    name: string;
    slug: string;
    subcategories: SubcategoryDTO[]
}

export type CreateCategoryDTO = Omit<CategoryDTO, '_id' | 'subcategories'>