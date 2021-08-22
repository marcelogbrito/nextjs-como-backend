import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function(req: NextApiRequest, res: NextApiResponse) {

  const prisma = new PrismaClient({log:['query']})

  try {
    const sightings = await prisma.sighting.findMany()
    res.status(200)
    res.json({sightings})

  } catch (error) {
    res.status(500)
    res.json({error:"Não foi possivel recuperar os dados"})

  }
  finally {
    await prisma.$disconnect()
  }
}
