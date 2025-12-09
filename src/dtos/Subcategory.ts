import { BaseDTO } from "./Base";

export interface SubcategoryDTO extends BaseDTO {
    name: string;
    slug: string;
    category: string;
}