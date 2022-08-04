import { Project } from "models/project";
import { createContext } from "react";

export type ProjectContext = {
  projects: Project[];
  categories: Record<string, number>;
  upvotedProjectsMap: Record<string, boolean>;

  upvoteProject: (projectId: string) => void;
};

export const ProjectContext = createContext<ProjectContext>({
  projects: [],
  categories: {},
  upvotedProjectsMap: {},
  upvoteProject(projectId) {
    return projectId;
  },
});

export const ProjectContextProvider = ProjectContext.Provider;

export default ProjectContext;
