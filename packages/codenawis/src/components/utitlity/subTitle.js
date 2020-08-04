import React from "react";
import { styled } from "frontity";

const SubTitle = ({ title, classes }) => {
  return (
    <SubTitleCss className={classes} dangerouslySetInnerHTML={{ __html: title }} />
  );
};
export default SubTitle;

const SubTitleCss = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  color: gray;
  &.text-black {
      color: black !important;
  }
  &.mb-0 {
    margin-bottom: 0 !important;
  }
`;
