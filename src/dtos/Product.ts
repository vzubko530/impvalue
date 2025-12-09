import { BaseDTO } from "./Base";

export interface ProductDTO extends BaseDTO {
    title: string;
    description: string;
    price: number;
    category: string;
    subcategory: string;
    seller: string;
}