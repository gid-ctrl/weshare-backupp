import type { NextApiRequest, NextApiResponse } from "next"
import {  getServerSession  } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    // Here we are checking if the user has logged in or not
    if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions)
 if (!session)
        return res
        .status(401)
        .json({ message: "Please signin to create a post." })
      }
      console.log(req.body)
    }

