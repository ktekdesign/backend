import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma: PrismaClient = new PrismaClient()
export const update = async (req: Request, res: Response) => {
  try {
    const { name, email, id } = req.body
    const user = await prisma.user.update({
      data: {
        name,
        email
      },
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
