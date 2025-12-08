export interface CategoryDTO {
    _id: string;
    name: string;
    slug: string;
    subcategories: SubcategoryDTO[]
}

export type CreateCategoryDTO = Omit<CategoryDTO, '_id' | 'subcategories'>