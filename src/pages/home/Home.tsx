import styled from "styled-components";
import HomeImage from "./../../assets/TB-FasadeVest.png";

const Container = styled.div`
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Image src={HomeImage} />
    </Container>
  );
};

export default Home;
