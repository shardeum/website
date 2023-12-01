import { NextApiRequest, NextApiResponse } from "next";
import { getSHMProjects } from "../../utils/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getSHMProjects();
  return res.status(201).json({ data });
}
