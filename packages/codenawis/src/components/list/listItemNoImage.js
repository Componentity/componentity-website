import React from "react";
import { connect, styled } from "frontity";

const ListItemNoImage = ({ state, item, libraries}) => {
    const Html2React = libraries.html2react.Component;
    console.log("Item:", item);
  return (
            <Flex className="mb-2 border-0">
            <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} ></h2>
            <Html2React html={item.content.rendered} />
            </Flex>
  );
};

const Flex = styled.div`
    
`;
// Connect the Item to gain access to `state` as a prop
export default connect(ListItemNoImage);