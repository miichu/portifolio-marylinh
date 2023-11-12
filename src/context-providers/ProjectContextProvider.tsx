import { createContext, useContext, useState } from "react";
import { IProject } from "../types/project";

export interface IProjectContext {
  projects: IProject[];
  setProjects: (projects: IProject[]) => void;
}

const ProjectContext = createContext<IProjectContext>({
  projects: [],
  setProjects: () => {},
});

export const useProjectContext = () =>
  useContext<IProjectContext>(ProjectContext);

const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
