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
  &.align-left {
      align-items: start;
      justify-content: flex-start;
  }
  &.align-right {
    align-items: end;
    justify-content: flex-end;
  }
  &.column {
    flex-direction: column;
    justify-content: center;
  }
`;
