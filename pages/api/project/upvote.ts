import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { addProjectToUserUpvotedProjects } from "utils/api";
import { gosync } from "utils/async-helpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [session, err] = await gosync(getSession({ req }));

  if (err || !session) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const upvoted = req.body.upvoted;
  const projectId = req.body.projectId;

  if (upvoted) await addProjectToUserUpvotedProjects(projectId, session.user.id);
  // else await removeProjectFromUserUpvotedProjects(projectId, session.user.id);

  return res.status(200).json({ message: "OK", upvoted: req.body.upvoted });
}
