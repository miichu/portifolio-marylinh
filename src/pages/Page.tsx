import styled from "styled-components";
import { BASE_URL } from "../utils/constants";
import { Link, Outlet } from "react-router-dom";
import logo from "./../assets/MLN_logo.png";
const PageContainer = styled.div`
  padding: 0 2em;
`;

const OutletContainer = styled.div`
  margin: 2em 0;
`;

const Menu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 2.5em;
`;
const Logo = styled.img`
  height: 40px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`;

const List = styled.ul`
  margin: 0 0 0 56px;
  padding: 0;
  list-style-type: none;
  column-count: 4;
  column-gap: 48px;

  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: darkgray;
  font-size: 1.3em;
  letter-spacing: 2.5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Page = () => {
  return (
    <PageContainer>
      <Menu>
        <Link to={`${BASE_URL}/`}>
          <Logo src={logo} alt="MLN logo"></Logo>
        </Link>
        <List>
          <li>
            <StyledLink to={`${BASE_URL}/about-me`}>OM MEG</StyledLink>
          </li>
          <li>
            <StyledLink to={`${BASE_URL}/projects`}>PROSJEKTER</StyledLink>
          </li>
        </List>
      </Menu>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </PageContainer>
  );
};
export default Page;
