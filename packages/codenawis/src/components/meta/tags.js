import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Tags = ({ state, tags }) => (
  <>
    {tags.length > 0 ? (
      <>
        {tags.map((tagId, index) => {
          const tag = state.source.tag[tagId];
          return (
            <Wrapper key={tagId}>
              <Link link={tag?.link}>{"#"+tag?.name}</Link>
            </Wrapper>
          );
        })}
      </>
    ) : null}
  </>
);

export default connect(Tags);

const Wrapper = styled.span`
  display: inline-block;
  margin-right: .5rem;
  & a {
    color: #dc3545;
    font-weight: 500;
    font-size: .7rem;
  }
  a:hover {
      transition: all .5s;
      color:black;
  }
`;