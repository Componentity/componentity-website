import React from "react";
import { connect, styled } from "frontity";

const ListItemNoImage = ({ state, item, libraries}) => {
    const Html2React = libraries.html2react.Component;
  return (
            <div className="mb-2 border-0">
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} ></Title>
            <Html2React html={item.content.rendered} />
            </div>
  );
};

const Title = styled.h2`
    color: #9B5DE5;
`;
// Connect the Item to gain access to `state` as a prop
export default connect(ListItemNoImage);