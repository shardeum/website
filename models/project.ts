export type Project = {
  id: string;
  name: string; // Project Name
  description: string; // Project Description
  category: string; // Project Category
  logo: string; // Project Image
  website: string; // Project Website
  screenShots: string[] | null; // Project Screenshot
};
