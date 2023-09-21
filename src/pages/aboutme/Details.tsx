import styled from "styled-components";
import { Heading2 } from "../styledComponents";
import { IUser } from "../../types/user";

const HeadingAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  margin: 0;
  list-style-type: none;
`;

const Details = ({
  previousWork,
  education,
  email,
  telephone,
}: Partial<IUser>) => {
  return (
    <>
      <HeadingAndTextWrapper style={{ gridArea: "education" }}>
        <Heading2>UTDANNING</Heading2>
        <List>
          {education?.map((school) => (
            <li>{`${school.title} -  ${school.description}`}</li>
          ))}
        </List>
      </HeadingAndTextWrapper>
      <HeadingAndTextWrapper style={{ gridArea: "previousWork" }}>
        <Heading2>KARRIERE</Heading2>
        <List>
          {previousWork?.map((work) => (
            <li>{`${work.title} -  ${work.description}`}</li>
          ))}
        </List>
      </HeadingAndTextWrapper>
      <HeadingAndTextWrapper style={{ gridArea: "contact" }}>
        <Heading2>KONTAKT</Heading2>
        <List>
          <li>{telephone}</li>
          <li>{email}</li>
        </List>
      </HeadingAndTextWrapper>
    </>
  );
};
export default Details;
