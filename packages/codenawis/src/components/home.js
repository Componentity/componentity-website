import React from "react";
import { connect, styled, keyframes } from "frontity";
import Container from "./utitlity/Container";
import ContainerFull from "./utitlity/containerFull";
import Row from "./utitlity/Row";
import Col from "./utitlity/Col";
import HoverLink from "./utitlity/HoverLink";
import SubTitle from "./utitlity/subTitle";
import SectionTitle from "./utitlity/SectionTitle";
import FlexCenter from "./utitlity/FlexCenter";

const Home = ({ state }) => {
  return (
    <>
      <ContainerFull
        classes="py-10"
        bgImage="https://comoponentity.files.wordpress.com/2020/11/8632c-background-e28093-3.png"
      >
        <FlexCenter className="column align-center">
          <span>What a lovely word it is</span>
          <br />
          <SectionTitle>CopyPaste</SectionTitle>
          <br />
          <p>
            Thousands of branded & <b>Free</b> components ready to be
            copy-pasted!
          </p>
          <br />
        </FlexCenter>
      </ContainerFull>
      <Clippy id="getStarted">
        <Container classes="py-10">
          <SectionTitle>Get Started</SectionTitle>
          <SubTitle
            classes="mb-0"
            title="Thousands of eye-catching components ready to be copy-pasted!"
          />
          <br />
          <br />
          <Row>
            <Col className="m2 s6">
              <HoverLink link="/category/tailwindcss">
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/65589-group-3.png"
                  alt="TailwindCSS Ready to be copy pasted Components by Componentity.com"
                />
              </HoverLink>
            </Col>
            <Col className="m2 s6">
              <HoverLink HoverLink link="/category/bootstrap">
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/f281b-group-2.png"
                  alt="Bootstrap Ready to be copy pasted Components by Componentity.com"
                />
              </HoverLink>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/43857-group-1.png"
                  alt="MateriallizeCSS Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/47b0f-group-19.png"
                  alt="Sass CSS Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/97f81-group-17.png"
                  alt="ReactJS Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/ec0f2-group-16.png"
                  alt="VueJS Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/3b67d-flat550x550075f.u3.png"
                  alt="AngularJS Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/90ac4-group-15.png"
                  alt="SvelteJS Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/b6836-group-15-2.png"
                  alt="JQuery Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15-1.png"
                  alt="Wordpress Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/11855-group-16-1.png"
                  alt="Flutter Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
            <Col className="m2 s6">
              <Disable>
                <img
                  src="https://comoponentity.files.wordpress.com/2020/11/41013-group-17-1.png"
                  alt="Frontity Ready to be copy pasted Components by Componentity.com"
                />
              </Disable>
            </Col>
          </Row>

          <br />
          <br />
          <FlexCenter>
            <HoverLink link="/contribute">
              <b>Contribute</b>
            </HoverLink>
          </FlexCenter>
        </Container>
      </Clippy>
      <br />
      <br />
      <br />
    </>
  );
};

export default connect(Home);

const Clippy = styled.div`
  @media (min-width: 570px) {
    clip-path: polygon(50% 10%, 100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
  }
  width: 100%;
  background-color: #f9fafb;
  position: relative;
  top: -100px;
  z-index: 1000;
`;

const Disable = styled.div`
  opacity: 0.5;
`;

const RightToLeft = keyframes`
  0% {
    opacity: 0.5;
    transform: translateX(2000px) translateY(150px) scale(.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) translateY(80%) scale(1.5);
    z-index: 1;
  }
`;
const LargeToSmall = keyframes`
  0% {
    opacity: 0 !important;
    transform: translateX(200px) scale(100);
  }
  100% {
    opacity: 1;
    transform: translateX(-15%) translateY(10%) scale(1.3);
  }
`;

// Add the animation to the styled component.
const Animate = styled.div`
  opacity: 0;
  margin-left: auto;
  margin-right: 0;
  &.RightToLeft {
    animation: ${RightToLeft} 1s linear;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
  &.LargeToSmall {
    animation: ${LargeToSmall} 1s linear;
    animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  &.w-550 {
    width: 550px;
    height: auto;
    @media (max-width: 576px) {
      width: 200px !important;
    }
    img {
      border-radius: 3px;
      box-shadow: 0 0 20px #eee;
    }
  }
`;
