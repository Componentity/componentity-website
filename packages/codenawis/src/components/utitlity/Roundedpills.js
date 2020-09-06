import React from "react";
import { styled } from "frontity";

const Roundedpills = ({ count }) => {
  return (
    <RoundedPills>{ count }</RoundedPills>
  );
};
export default Roundedpills;

const RoundedPills = styled.span`
  font-weight: 600;
  font-size: .7rem;
  background-color: white;
  color: black;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-right: 7px;
  margin-left: 7px;
`;