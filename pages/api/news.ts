import { NextApiRequest, NextApiResponse } from "next";
import { getSHMNewsArticles } from "../../utils/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await getSHMNewsArticles();
  return res.status(201).json({ data });
}
