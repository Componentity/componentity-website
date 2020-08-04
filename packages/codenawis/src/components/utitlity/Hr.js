import { styled } from "frontity";

const Hr = ({children}) => {
    return (
          <HrCss>
            {children}
          </HrCss> 
    )
}

const HrCss = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1.3px solid #eee;
  width: 100%;
`;

export default Hr
