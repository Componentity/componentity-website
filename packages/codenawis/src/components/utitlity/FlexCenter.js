import React from 'react'
import {styled} from 'frontity';

const FlexCenter = ({children, className}) => {
    return (
        <FlexCenterCss className={className}>
            {children}
        </FlexCenterCss>
    )
}

export default FlexCenter

const FlexCenterCss = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  &.column {
    flex-direction: column;
  }
  &.align-center {
    align-items: center;
  }
  &.align-start {
    align-items: flex-start;
  }
  &.align-end {
    align-items: flex-end;
  }
  &.justify-start {
    justify-content: flex-start;
  }
  &.justify-end {
    justify-content: flex-end;
  }
`;
