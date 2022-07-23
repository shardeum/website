export type Project = {
  id: string; // The ID of the project.
  name: string; // Project Name
  description: string; // Project Description
  category: string; // Project Category
  logo: string; // Project Image
  website: string; // Project Website
  screenShots: string[] | null; // Project Screenshot
  dateCreated: Date | string; // Project Date Created
  numUpvotes: number; // Project Upvotes
};
