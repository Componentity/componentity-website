import React from "react";
import { connect } from "frontity";
import Row from './utitlity/Row'
import Col from './utitlity/Col'
import UL from './utitlity/UL'
import Sidebar from './utitlity/Sidebar'
import HoverLink from './utitlity/HoverLink'
import FlexCenter from "./utitlity/FlexCenter";
import ListItem from './list/list-item'

const ComponentsPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const route = data.route.split("/");
  const prefix = state.frontity.url+"/"+route[1]+"/"+route[2]+"/";
  const categoryName = route[2];
  return (
        <Row>
              <Col className="m3">
                  <Sidebar>
                    <UL>
                        <li>
                            <b>TEMPLATES</b>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"themes-free-"+ categoryName}>Free Templates</HoverLink>
                            </FlexCenter>
                         </li>
                         <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"themes-premium-"+ categoryName}>Premium Templates</HoverLink>
                            </FlexCenter>
                        </li>
                        <br/>
                        <li>
                            <b>COMPONENTS</b>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"cards-"+ categoryName}>Cards</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"authorbox-"+ categoryName}>AuthorBox</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"buttons-"+ categoryName}>Buttons</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"modals-"+ categoryName}>Modals</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"alerts-"+ categoryName}>Alerts</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"carousels-"+ categoryName}>Carousel Sliders</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"forms-"+ categoryName}>Forms</HoverLink>
                            </FlexCenter>
                        </li>
                        <li>
                            <FlexCenter className="justify-start align-center">
                                <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                                <HoverLink link={prefix+"navtabs-"+ categoryName}>NavTabs</HoverLink>
                            </FlexCenter>
                        </li>
                    </UL>
                  </Sidebar>
              </Col>
              <Col className="m9">
                <Row>
                    {data.items.map(({ type, id }) => {
                      const item = state.source[type][id];
                      return (
                          <Col className="m4">
                            <ListItem imageHeight="100" key={item.id} item={item} />
                          </Col>
                      );
                    })}
                </Row>
              </Col>
        </Row>
  );
};

export default connect(ComponentsPage);
