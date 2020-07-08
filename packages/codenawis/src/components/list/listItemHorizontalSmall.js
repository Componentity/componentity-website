import React from "react";
import { connect, styled } from "frontity";
import HoverLink from "../utitlity/HoverLink";
import Article from "../utitlity/Article";
import CardTitle from "../utitlity/cardTitle";
import FeaturedMedia from "../featured-media";

const ListItemHorizontalSmall = ({ state, item }) => {

  return (
            <Article className="mb-2">
                <Flex>
                  <div>
                  <HoverLink link={item.link}>
                    {state.theme.featured.showOnList && (
                      <FeaturedMedia height="100px" width="100px" id={item.featured_media} />
                    )}
                  </HoverLink>
                  </div>
                  <div>
                    <div>
                      <HoverLink link={item.link}>
                        <CardTitle margin=".5rem" title={item.title.rendered} />
                      </HoverLink>
                    </div>
                  </div>
                </Flex>
            </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(ListItemHorizontalSmall);

const Flex = styled.div`
  display: flex;
`;