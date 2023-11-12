import styled from "styled-components";
import { IProject } from "../../types/project";
import { BodyLong } from "@navikt/ds-react";
import { Heading2 } from "../styledComponents";
import { urlFor } from "../../utils/sanityUtils";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  text-align: center;
`;

const ImgWrapper = styled.div``;
const Image = styled.img`
  min-width: 250px;
  max-width: 350px;
`;
const Project = (project: IProject) => {
  return (
    <Container>
      <Heading2>{project.name}</Heading2>
      <BodyLong>{project.description}</BodyLong>
      <ImgWrapper>
        {project.photos?.map((photo) => (
          <Image
            key={photo.id}
            src={urlFor(photo.image).width(400).height(300).url()}
          />
        ))}
      </ImgWrapper>
    </Container>
  );
};

export default Project;
