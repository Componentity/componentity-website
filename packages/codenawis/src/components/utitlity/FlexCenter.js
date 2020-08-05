import React from 'react'
import {styled} from 'frontity';

const FlexCenter = ({children, direction="row"}) => {
    return (
        <FlexCenterCss className={direction}>
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
  &.justify-start {
      justify-content: flex-start;
  }
  &.justify-end {
    justify-content: flex-end;
  }
  &.column {
    flex-direction: column;
    justify-content: center;
  }
  &.align-center {
    align-items: center;
  }
`;
