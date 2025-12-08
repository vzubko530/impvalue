import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import Subcategory from "@/models/Subcategory";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {slug: string}}) {
   await connectDB()

   const {slug} = params;

   const subcategory = await Subcategory.findOne({slug: slug});

   if(!subcategory) {
      return NextResponse.json({error: 'Subcategory not found'}, {status: 404})
   }

   const products = await Product.find({subcategory: subcategory._id})

   return NextResponse.json(products)
}