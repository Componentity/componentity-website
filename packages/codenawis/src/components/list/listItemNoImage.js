import React from "react";
import HoverLink from "../utitlity/HoverLink";
import { connect, styled } from "frontity";
import Tags from "../meta/tags";
import Categories from "../meta/categories";
import Hr from "../utitlity/Hr";

const ListItemNoImage = ({ state, item, libraries}) => {
    const Html2React = libraries.html2react.Component;
  return (
            <div className="mb-2 border-0">
              <HoverLink link={item.link}>
                <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} ></Title>
              </HoverLink>
              <Html2React html={item.content.rendered} />
              <br/>
              { item.tags && <Tags tags={item.tags} /> }
              <br/>
              <br/>
              { item.categories && <Categories cats={item.categories} /> }
              <br/>
              <Hr />
            </div>
  );
};

const Title = styled.h2`
    color: #9B5DE5;
`;
// Connect the Item to gain access to `state` as a prop
export default connect(ListItemNoImage);