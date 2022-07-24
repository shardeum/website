import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { addProjectToUserUpvotedProjects, removeProjectFromUserUpvotedProjects } from "utils/api";
import { gosync } from "utils/async-helpers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const [session, err] = await gosync(getSession({ req }));

  if (err || !session) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  const upvoted = req.body.upvoted;
  const projectId = req.body.projectId;

  if (upvoted) {
    const [, err] = await gosync(addProjectToUserUpvotedProjects(projectId, session.user.id));
    if (err) {
      return res.status(500).json({ message: "Error adding project to upvoted projects" });
    }
  } else {
    const [, err] = await gosync(removeProjectFromUserUpvotedProjects(projectId, session.user.id));
    if (err) {
      return res.status(500).json({ message: "Error removing project from upvoted projects" });
    }
  }

  return res.status(200).json({ message: "OK", upvoted: req.body.upvoted });
}
