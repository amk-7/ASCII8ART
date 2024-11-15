import fs from "node:fs/promises";
import fileUrl from "node:url";
import path from "node:path";

import { PrismaClient } from "@prisma/client";
const prisma =new PrismaClient()

const current_abp = fileUrl.fileURLToPath(import.meta.url)
const dirname = path.dirname(current_abp)
const seed_file_path = dirname+"/db_data_seed.json";


async function seedRun(){
  try {
    const file=await fs.open(seed_file_path,'r');
    const fileContent = await file.readFile("utf-8");
    const artworks = JSON.parse(fileContent);

    await prisma.artwork.createMany({
      data: artworks,
    });
   
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedRun()

