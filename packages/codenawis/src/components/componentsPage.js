import React from "react";
import { connect } from "frontity";
import Row from './utitlity/Row'
import Col from './utitlity/Col'
import ListItem from './list/list-item'

const ComponentsPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
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
  );
};

export default connect(ComponentsPage);
