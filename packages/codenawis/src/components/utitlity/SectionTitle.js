import { styled } from "frontity";

const SectionTitle = ({children}) => {
    return (
        <SectionTitleCss>
            {children}
        </SectionTitleCss>
    )
}

const SectionTitleCss = styled.h1`
  font-size: 60px;
  font-weight: 700;
  color: #9B5DE5;
  line-height: 1;
  margin: 0;
`;
export default SectionTitle
