import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

const Categories = ({ state, cats }) => (
  <>
    {cats.length > 0 ? (
      <Wrapper>
        <b>Categories: </b>
        {cats.map((catId, index) => {
          const isLast = !!(cats.length === index + 1);
          const cat = state.source.category[catId];
          return (
            <span key={catId}>
              <Link link={cat.link}>{cat.name}</Link>
              {!isLast && ", "}
            </span>
          );
        })}
      </Wrapper>
    ) : null}
  </>
);

export default connect(Categories);

const Wrapper = styled.span`
    display: inline-block;
    margin-right: .5rem;
    & a {
      color: #dc3545;
      font-weight: 500;
      font-size: 1rem;
    }
    a:hover {
        transition: all .5s;
        color:black;
    }
`;