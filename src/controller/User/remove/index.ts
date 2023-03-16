import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma: PrismaClient = new PrismaClient()
export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    const user = await prisma.user.delete({
      where: {
        id
      }
    })
    prisma.$disconnect
    return res.status(200).json(user)
  } catch (err) {
    prisma.$disconnect
    return res.status(400).json(err)
  }
}
