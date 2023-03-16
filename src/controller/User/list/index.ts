import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma: PrismaClient = new PrismaClient()

export const list = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany()
    prisma.$disconnect
    return res.status(200).json(users)
  } catch (err) {
    prisma.$disconnect
    return res.status(400).json(err)
  }
}