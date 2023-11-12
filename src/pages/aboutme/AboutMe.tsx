import styled from "styled-components";
import MLN_portrait from "./../../assets/MLN_portrett.png";
import Details from "./Details";
import { Heading1 } from "../styledComponents";
import { useUserContext } from "../../context-providers/UserContextProvider";

const Container = styled.div`
  height: 400px;
  width: 100%;
  color: var(--main-black-color);

  display: grid;
  grid-template-areas:
    "heading heading heading"
    "img desc education"
    "img desc previousWork"
    "img desc contact";
  grid-gap: 2em;

  @media only screen and (min-width: 640px) and (max-width: 1280px) {
    grid-template-areas:
      "heading heading"
      "img desc"
      "education education"
      "previousWork previousWork"
      "contact contact";
  }

  @media only screen and (max-width: 639px) {
    grid-template-areas:
      "heading"
      "img"
      "desc"
      "education"
      "previousWork"
      "contact";
  }
`;

const Portrait = styled.img`
  max-height: 500px;
  grid-area: img;
  @media only screen and (min-width: 768px) and (max-width: 1280px) {
    max-height: 400px;
  }

  @media only screen and (max-width: 768px) {
    max-height: 300px;
  }
`;

const AboutMe = () => {
  const { user } = useUserContext();
  const { email, telephone, previousWork, education, description } = user;
  return (
    <Container>
      <Heading1>OM MEG </Heading1>
      <Portrait src={MLN_portrait} alt="portrait" />
      <p style={{ gridArea: "desc", margin: 0 }}>{description}</p>
      <Details {...{ previousWork, education, email, telephone }} />
    </Container>
  );
};

export default AboutMe;
