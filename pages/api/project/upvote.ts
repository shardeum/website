import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { gosync } from "utils/async-helpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [session, err] = await gosync(getSession());

  if (err || !session) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  return res.status(200).json({ session, err });
}
