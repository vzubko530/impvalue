import { NextResponse } from "next/server";
import Category from "@/models/Category";
import { connectDB } from "@/lib/mongodb";

export async function POST() {
  await connectDB();

  // Моки
  const mockCategories = [
    { name: "Minecraft", slug: "minecraft" },
    { name: "CS:GO", slug: "csgo" },
    { name: "Fortnite", slug: "fortnite" },
    { name: "Valorant", slug: "valorant" },
    { name: "Roblox", slug: "roblox" },
    { name: "Dota 2", slug: "dota-2" },
    { name: "GTA Online", slug: "gta-online" },
    { name: "Escape From Tarkov", slug: "eft" },
    { name: "Apex Legends", slug: "apex-legends" },
    { name: "Rust", slug: "rust" }
  ];

  // Очистим коллекцию перед вставкой
  await Category.deleteMany({});

  const inserted = await Category.insertMany(mockCategories);

  return NextResponse.json(
    { message: "Mock categories inserted", data: inserted },
    { status: 201 }
  );
}
