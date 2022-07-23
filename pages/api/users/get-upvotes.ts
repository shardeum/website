import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { getUserUpvotedProjects } from "utils/api";
import { gosync } from "utils/async-helpers";

export const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const [session, err] = await gosync(getSession());

  if (err || !session) {
    return res.status(200).json({ upvotedProjectIds: [] });
  }

  // eslint-disable-next-line
  // @ts-ignore
  const [upvotedProjectsData, upvotesErr] = await gosync(getUserUpvotedProjects(session.user?.id));

  if (upvotesErr) {
    console.log({ err: upvotesErr });
    return res.status(200).json({ upvotedProjectIds: [] });
  }

  return res.status(200).json(upvotedProjectsData);
};

export default handler;
