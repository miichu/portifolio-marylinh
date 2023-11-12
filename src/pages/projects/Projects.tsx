import styled from "styled-components";
import { Heading1, Heading2 } from "../styledComponents";
import { useProjectContext } from "../../context-providers/ProjectContextProvider";
import { IProject } from "../../types/project";

import { urlFor } from "../../utils/sanityUtils";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
`;

const Image = styled.img`
  min-width: 250px;
  max-width: 350px;
`;

const Projects = () => {
  const { projects } = useProjectContext();

  return (
    <>
      <Heading1>Projects</Heading1>
      <ProjectsContainer>
        {projects.length !== 0 ? (
          projects.map((project: IProject) => (
            <ProjectWrapper key={project.id}>
              {project?.photos !== undefined &&
                project?.photos?.map((photo) => (
                  <Image
                    key={photo.id}
                    src={urlFor(photo.image).width(400).height(300).url()}
                  />
                ))}

              <Heading2 style={{ fontSize: "1.5em" }}>
                {project.name.toUpperCase()}
              </Heading2>
            </ProjectWrapper>
          ))
        ) : (
          <p>prosjekter å vise</p>
        )}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
