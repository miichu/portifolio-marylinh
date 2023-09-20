import styled from "styled-components";
import { Heading1, Heading2 } from "../styledComponents";
import { projects } from "./projectsData";

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
  return (
    <>
      <Heading1>Projects</Heading1>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <Image src={project.photo} />
            <Heading2 style={{ fontSize: "1.5em" }}>
              {project.name.toUpperCase()}
            </Heading2>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
