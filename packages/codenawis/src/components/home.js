import React from "react";
import { connect, styled } from "frontity";
import Container from './utitlity/Container'
import Row from './utitlity/Row'
import Col from './utitlity/Col'
import UL from './utitlity/UL'
import HoverLink from './utitlity/HoverLink'
import SubTitle from './utitlity/subTitle'
import SectionTitle from './utitlity/SectionTitle'
import FlexCenter from "./utitlity/FlexCenter";

const Home = ({ state }) => {
  const data = state.source.get(state.router.link);


  return (
    <>
    <Container>
        <Row>
              <Col className="m5">
                  <FlexCenter className="column align-start">
                    <SectionTitle>Ctrl+C - Ctrl+V</SectionTitle>
                    <SubTitle classes="mb-0" title="Dont Waste your time writing the code we have already written!" />
                    <SubTitle classes="text-black mb-0" title="Just <b>Copy & Paste!!!</b>" />
                    <UL>
                      <li>
                        <FlexCenter className="justify-start align-center">
                        <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        <a href="#getStarted">GetStarted</a>
                        </FlexCenter>
                      </li>
                      <li>
                        <FlexCenter className="justify-start align-center">
                        <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        <HoverLink link="/shop">Eye-catching Themes</HoverLink>
                        </FlexCenter>
                      </li>
                      <li>
                        <FlexCenter className="justify-start align-center">
                        <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                        <HoverLink link="/contact">Enterprise Projects <sup>(Contact Us)</sup></HoverLink>
                        </FlexCenter>
                      </li>
                    </UL>
                  </FlexCenter>
              </Col>
              <Col className="m6">
                <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-13.png" alt=""/>
              </Col>
        </Row>
    </Container>
    <Clippy id="getStarted">
      <Container classes="py-10">
        <SectionTitle>Get Started</SectionTitle>
        <SubTitle classes="mb-0" title="Thousands of eye-catching components ready to be copy-pasted!" />
        <br/>
        <br/>
        <Row>
          <Col className="m2 s6">
            <HoverLink link="/category/tailwindcss"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-3.png" alt="TailwindCSS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink HoverLink link="/category/bootstrap"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-2.png" alt="Bootstrap Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/materializecss"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-1.png" alt="MateriallizeCSS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/sass"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-19.png" alt="Sass CSS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/reactjs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-17.png" alt="ReactJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/vuejs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-16.png" alt="VueJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/angularjs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/flat550x550075f.u3.png" alt="AngularJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/sveltejs"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15.png" alt="SvelteJS Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/jquery"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15-2.png" alt="JQuery Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/wordpress"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-15-1.png" alt="Wordpress Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/flutter"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-16-1.png" alt="Flutter Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
          <Col className="m2 s6">
            <HoverLink link="/category/frontity"><img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Group-17-1.png" alt="Frontity Ready to be copy pasted Components by Componentity.com"/></HoverLink>
          </Col>
        </Row>

        <br/>
        <br/>
        <FlexCenter>
          <HoverLink link="/support"><b>Support Us</b></HoverLink>
        </FlexCenter>

      </Container>
    </Clippy>
    </>
  );
};

export default connect(Home);

const Clippy = styled.div`
  @media (min-width: 570px){
    clip-path: polygon(50% 10%, 100% 0, 100% 100%, 50% 90%, 0 100%, 0 0);
  }
  width: 100%;
  background-color: #F9FAFB;
`;