import styled from "styled-components";
import MLN_portrait from "./../../assets/MLN_portrett.png";
import Details from "./Details";

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

const Heading1 = styled.h1`
  letter-spacing: 2.5px;
  font-weight: 250;
  font-size: 2.5em;
  line-height: 1.1;
  color: darkred;
  grid-area: heading;
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

export interface IPerson {
  name: string;
  email: string;
  telephone: string;
  previousWork: string[];
  education: string[];
  description: string;
}

const person: IPerson = {
  name: "Mary Linh Nguyen",
  email: "marylinh.nguyen93@gmail.com",
  telephone: "+47 47 36 56 04",
  previousWork: ["PI Arkitekter", "Rambøll / Henning Larsen"],
  education: [
    "Master i arkitektur - NTNU",
    "Studiespeisalisering med formgivingsfag - Elvebakken videregående skole",
  ],
  description:
    "Denne portfolioen er en samling av utvalgte arbeider fra min tid somarkitektstudent ved NTNU i Trondheim, og som arkitekt hos Rambøll / Henning Larsen. Prosjektene varierer fra boligprosjektering i liten skala til byplanlegging i stor skala, og er presentert i omvendt kronologisk rekkefølge. \n \n I arbeidslivet har jeg fått muligheten til å jobbe med mange prosjekter i tidlig fase. Jeg trives godt i arbeid med visualiseringer og fremstilling av prosjekter. \nI løpet av studietiden ble jeg kjent med ulike teknikker, redskaper og dataprogrammer, og det har vært spennende å eksperimentere med disse for å oppnå variasjon. Visualiseringene varierer fra å være fotorealistiske til mer abstrakte og konseptuelle avhengig av prosjekt, tidsramme og hvilken stemning jeg ønsket å formidle.",
};

const AboutMe = () => {
  const { email, telephone, previousWork, education, description } = person;
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
