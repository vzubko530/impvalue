import { NextResponse } from "next/server";
import Category from "@/models/Category";
import Subcategory from "@/models/Subcategory";
import { connectDB } from "@/lib/mongodb";

export async function POST() {
  await connectDB();

  const mock = [
    {
      name: "Minecraft",
      slug: "minecraft",
      subcategories: [
        { name: "Аккаунты", slug: "minecraft-accounts" },
        { name: "Валюта", slug: "minecraft-currency" },
        { name: "Предметы", slug: "minecraft-items" }
      ]
    },
    {
      name: "CS:GO",
      slug: "csgo",
      subcategories: [
        { name: "Аккаунты", slug: "csgo-accounts" },
        { name: "Скины", slug: "csgo-skins" },
        { name: "Буст", slug: "csgo-boost" }
      ]
    },
    {
      name: "Steam",
      slug: "steam",
      subcategories: [
        { name: "Аккаунты", slug: "steam-accounts" },
        { name: "Регион", slug: "steam-region" },
        { name: "Баланс", slug: "steam-balance" }
      ]
    },
    {
      name: "Fortnite",
      slug: "fortnite",
      subcategories: [
        { name: "Аккаунты", slug: "fortnite-accounts" },
        { name: "Вбаксы", slug: "fortnite-vbucks" },
        { name: "Скины", slug: "fortnite-skins" }
      ]
    },
    {
      name: "Valorant",
      slug: "valorant",
      subcategories: [
        { name: "Аккаунты", slug: "valorant-accounts" },
        { name: "Очки VP", slug: "valorant-vp" },
        { name: "Буст Рейтинга", slug: "valorant-boost" }
      ]
    },
    {
      name: "Dota 2",
      slug: "dota-2",
      subcategories: [
        { name: "Аккаунты", slug: "dota-accounts" },
        { name: "MMR Буст", slug: "dota-boost" },
        { name: "Сеты", slug: "dota-sets" }
      ]
    },
    {
      name: "Escape From Tarkov",
      slug: "eft",
      subcategories: [
        { name: "Аккаунты", slug: "eft-accounts" },
        { name: "Рубли EFT", slug: "eft-currency" },
        { name: "Предметы", slug: "eft-items" }
      ]
    },
    {
      name: "Apex Legends",
      slug: "apex-legends",
      subcategories: [
        { name: "Аккаунты", slug: "apex-accounts" },
        { name: "Монеты Apex", slug: "apex-coins" },
        { name: "Буст Ранга", slug: "apex-boost" }
      ]
    },
    {
      name: "Rust",
      slug: "rust",
      subcategories: [
        { name: "Аккаунты", slug: "rust-accounts" },
        { name: "Скины", slug: "rust-skins" },
        { name: "Предметы", slug: "rust-items" }
      ]
    }
  ];

  // Очистить коллекции
  await Category.deleteMany({});
  await Subcategory.deleteMany({});

  const created = [];

  for (const category of mock) {
    // 1. Создаём категорию
    const cat = await Category.create({
      name: category.name,
      slug: category.slug,
    });

    // 2. Создаём подкатегории, привязываем category: ObjectId
    const subDocs = await Subcategory.insertMany(
      category.subcategories.map((sub) => ({
        ...sub,
        category: cat._id,
      }))
    );

    created.push({
      category: cat,
      subcategories: subDocs,
    });
  }

  return NextResponse.json(
    {
      message: "Mock categories + subcategories inserted",
      data: created
    },
    { status: 201 }
  );
}
