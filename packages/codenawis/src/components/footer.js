import React from "react";
import { connect } from "frontity";
import Container from './utitlity/Container';
import Hr from './utitlity/Hr';
import Logo from './utitlity/Logo';
import Row from './utitlity/Row';
import Col from './utitlity/Col';
import UL from './utitlity/UL';
import HoverLink from './utitlity/HoverLink';
import FlexBetween from './utitlity/FlexBetween';

const Footer = ({ state }) => {
  return (
    <>
      <Container classes="py-3">
          <Row>
            <Col className="m4">
              <Logo color="black" />
            </Col>
            <Col className="m8">
              <Row>
                <Col className="m4 s6">
                  <UL>
                    <li>
                      <b>COMPANY</b>
                    </li>
                    <li>
                      <HoverLink link="/about">About Us</HoverLink>
                    </li>
                    <li>
                      <HoverLink link="/contact">Contact Us</HoverLink>
                    </li>
                    <li>
                      <HoverLink link="/privacy-policy">Privacy Policy</HoverLink>
                    </li>
                  </UL>
                </Col>
                <Col className="m4 s6">
                  <UL>
                    <li>
                      <b>SUPPORT US</b>
                    </li>
                    <li>
                      <a target="_blank" href="#">Buy me a coffee</a>
                    </li>
                    <li>
                      <a target="_blank" href="#">Paypal</a>
                    </li>
                    <li>
                      <a target="_blank" href="/contribute">Contribute</a>
                    </li>
                  </UL>
                </Col>
                <Col className="m4 s6">
                  <UL>
                    <li>
                      <b>SOCIAL MEDIA</b>
                    </li>
                    <li>
                      <a target="_blank" href="https://codepen.io/componentity">Codepen</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/componentity">Twitter</a>
                    </li>
                    <li>
                      <a target="_blank" href="https://instagram.com/componentity">Instagram</a>
                    </li>
                  </UL>
                </Col>
              </Row>
            </Col>
          </Row>
        <Hr />
        <FlexBetween>
          <span>{state.frontity.description}</span>
          <a href="https://github.com/codenawis" target="_blank" rel="noopener noreferrer">From <b>@CodeNawis</b></a>
        </FlexBetween>
        <br/>
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);