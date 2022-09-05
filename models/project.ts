type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
export interface Screenshot {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: Thumbnail;
    large: Thumbnail;
    small: Thumbnail;
  };
  type: string;
  url: string;
  width: number;
}
export type Project = {
  id: string; // The ID of the project.
  name: string; // Project Name
  description: string; // Project Description
  category: string; // Project Category
  logo: string; // Project Image
  website: string; // Project Website
  screenShots: Screenshot[]; // Project Screenshot
  dateCreated: Date | string; // Project Date Created
  numUpvotes: number; // Project Upvotes
  githubUrl: string; //github url
};

export default Project;
