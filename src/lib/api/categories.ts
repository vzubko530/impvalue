import { CategoryDTO } from "@/dtos/Category";

export async function getCategories(): Promise<CategoryDTO[]> {
    const resp = await fetch(`${process.env.PUBCLIC_BASE_URL}/api/categories`, {
        next: { revalidate: 60 }
    });

    if (!resp.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data = await resp.json() as CategoryDTO[];
    return data;
}