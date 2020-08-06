import React from "react";
import { connect } from "frontity";
import Container from './utitlity/Container'
import Row from './utitlity/Row'
import Col from './utitlity/Col'
import UL from './utitlity/UL'
import Sidebar from './utitlity/Sidebar'
import HoverLink from './utitlity/HoverLink'
import FlexCenter from "./utitlity/FlexCenter";
import ListItemNoImage from './list/listItemNoImage'

const ComponentsPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const route = data.route.split("/");
  const prefix = state.frontity.url+"/"+route[1]+"/"+route[2]+"/";

  return (
        <Row>
              <Col className="m3">
                  <Sidebar className="bg-light">
                    <UL>
                        <li>
                            <b>TEMPLATES</b>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"themes-free"}>Free Templates</HoverLink>
                            </FlexCenter>
                         </li>
                         <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"themes-premium"}>Premium Templates</HoverLink>
                            </FlexCenter>
                        </li>
                        <br/>
                        <li>
                            <b>COMPONENTS</b>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"cards"}>Cards</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"authorbox"}>AuthorBox</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"buttons"}>Buttons</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"modals"}>Modals</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"alerts"}>Alerts</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"carousels"}>Carousel Sliders</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"forms"}>Forms</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"navtabs"}>NavTabs</HoverLink>
                            </FlexCenter>
                        </li>
                    </UL>
                  </Sidebar>
              </Col>
              <Col className="m9">
                <Container>
                  <Row>
                    {data.items.map(({ type, id }) => {
                      const item = state.source[type][id];
                    // Render one Item component for each one.
                      return (
                        <Col className="m12">
                          <ListItemNoImage key={item.id} item={item} />
                        </Col>
                      );
                    })} 
                  </Row>
                </Container>
              </Col>
        </Row>
  );
};

export default connect(ComponentsPage);
