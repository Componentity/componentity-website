import React from "react";
import { connect, styled, decode } from "frontity";
import ListItemNoImage from "./listItemNoImage";
import Pagination from "./pagination";
import Container from '../utitlity/Container';
import Row from '../utitlity/Row';
import Col from '../utitlity/Col';
import UL from '../utitlity/UL';
import Sidebar from '../utitlity/Sidebar';
import HoverLink from '../utitlity/HoverLink';
import FlexCenter from '../utitlity/FlexCenter';
import Home from '../home'
import ComponentsPage from '../componentsPage'
import {categoryWidgets} from '../../components/utitlity/config/homepageSections';

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  return (
    <>

      {/* Iterate over the items of the list. */}
      <W100>
          {data.route === '/' && !data.isSearch
          ? <Home />
          :<Container>
          
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <Bold>{decode(state.source[data.taxonomy][data.id].name)}</Bold>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <Bold>{decode(state.source.author[data.id].name)}</Bold>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isSearch && (
        <Header>
          Search Results For: <Bold>{data.searchQuery}</Bold>
        </Header>
      )}

      {data.isTaxonomy && data.taxonomy == "category" && data.route !== "/category/blog/" ? (
        <ComponentsPage />
      ) : 
        <Row>
          <Col className="m9">
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
          // Render one Item component for each one.
            return (
              <Col className="m12">
                <ListItemNoImage key={item.id} item={item} />
              </Col>
            );
          })} 
          </Col>
          <Col className="m3">
            <Sidebar>
              <UL>
                <li>
                  <b>COMPONENTS FOR</b>
                </li>
                {
                  categoryWidgets.map(categoryWidget=>{
                    const category = categoryWidget.slug;
                    return (
                      category === 'blog' ? "" : 
                      <li>
                        <FlexCenter className="justify-start">
                          <svg fill="#9B5DE5" className="arrow-right" height="10px" width="10px" aria-hidden="true" focusable="false" height="12px" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                            <HoverLink link={"/category/"+category}>{category}</HoverLink>
                        </FlexCenter>
                      </li>
                    )
                  })
                }
              </UL>
            </Sidebar>
          </Col>
        </Row>
      }
          </Container>
          }
      </W100>

      {data.route === '/' ? null : <Pagination /> }
    </>
  );
};

export default connect(List);

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
  font-size: 1.6rem;
`;
const Bold = styled.b`
  font-weight: 700;
`;

const W100 = styled.div`
  width: 100%;
`;
