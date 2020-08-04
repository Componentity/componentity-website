import React from "react";
import { connect, styled, decode } from "frontity";
import ListItemOverlay from "./listItemOverlay";
import Pagination from "./pagination";
import Container from '../utitlity/Container';
import Row from '../utitlity/Row';
import Col from '../utitlity/Col';
import Home from '../home'

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>

      {/* Iterate over the items of the list. */}
      <W100>
          {data.route === '/' 
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
            <Row>
              {data.items.map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return (
                  <Col className="m4">
                    <ListItemOverlay imageHeight="400px" key={item.id} item={item} />
                  </Col>
                );
              })} 
            </Row>
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
