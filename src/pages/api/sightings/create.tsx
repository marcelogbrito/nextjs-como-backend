import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from "next";

export default async function(req: NextApiRequest, res: NextApiResponse) {
const prisma = new PrismaClient({log: ['query']});
try {
  const {sighting: sightingData} = req.body
  const sighting = await prisma.sighting.create({
    data: {
      latitude: sightingData.latitude,
      longitude: sightingData.longitude
    }
  })
  res.status(201)
  res.json(sighting)
} catch (error) {
  res.status(500)
  res.json({error: "acesso ao banco de dados indisponível "+error})
} finally {
  await prisma.$disconnect()
}
res.status(201)
res.json({sighting: "saved"})
}
