import { connectDB } from "@/lib/mongodb";
import Subcategory from "@/models/Subcategory";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB

    const subcategories = await Subcategory.find({})
    return NextResponse.json(subcategories)
}

