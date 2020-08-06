import { styled } from "frontity";

const UL = ({children, className}) => {
    return (
        <ULCss className={className}>
            {children}
        </ULCss>
    )
}

const ULCss = styled.ul`
  list-style-type: none;
  padding: 0 !important;
  .arrow-right {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    margin-right: 10px;
    margin-left: 20px;
  }
  li {
    margin-bottom: 10px;
  }
  li:hover {
    margin-left: 10px;
    transition: all .5s;
  }
`;
export default UL
