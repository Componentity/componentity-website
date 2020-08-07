import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Container from './utitlity/Container'
import Logo from './utitlity/Logo'
import SearchForm from './SearchForm';

const Header = ({ state }) => {
  return (
    <>
      <Container classes="py-3">
        <FlexBetweenCss>
          <Link link="/">
            <Logo />
          </Link>
          <Nav />
          <SearchForm />
        </FlexBetweenCss>
        <MobileMenu />
      </Container>
    </>
  );
};

const FlexBetweenCss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 570px){
    flex-direction: column !important;
    align-items: flex-start;
  }
`;

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);