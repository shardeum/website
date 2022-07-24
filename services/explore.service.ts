import axios from "axios";

export const upvoteProject = async (projectRecordId: string, userId: string, upvoted: boolean) => {
  return await axios.post(`/api/project/upvote`, {
    projectId: projectRecordId,
    userId,
    upvoted,
  });
};
