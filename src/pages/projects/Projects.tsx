interface IProject {
  name: string;
  id: string;
  // img: string;
}

const projects: IProject[] = [{ name: "project1", id: "project1" }];

const Projects = () => {
  return <>This is supposed to be a view page for projects</>;
};

export default Projects;
