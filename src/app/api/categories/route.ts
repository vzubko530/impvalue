import { CategoryDTO } from "@/dtos/Category";
import { connectDB } from "@/lib/mongodb";
import Category from "@/models/Category";
import Subcategory from "@/models/Subcategory";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const categories = await Category.find({}).lean();

  const results = await Promise.all(
    categories.map(async (category) => {
      const subcategories = await Subcategory.find({
        category: category._id,
      }).lean();

      return {
        ...category,
        subcategories,
      };
    })
  );

  return NextResponse.json(results);
}

export async function POST(req: Request): Promise<NextResponse> {
    await connectDB();

    const body: CategoryDTO = await req.json();

    const {slug} = body;

    const exist = await Category.find({slug});

    if(exist) {
        return NextResponse.json({
            error: `Category with slug: ${slug} already exists`,
        }, {
            status: 409
        })
    }

    const newCategory = await Category.create(body)

    return NextResponse.json(newCategory, {status: 201})
}