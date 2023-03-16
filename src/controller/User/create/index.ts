import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma: PrismaClient = new PrismaClient()
export const create = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    })
    prisma.$disconnect
    return res.status(200).json(user)
  } catch (err) {
    prisma.$disconnect
    return res.status(400).json(err)
  }
}
