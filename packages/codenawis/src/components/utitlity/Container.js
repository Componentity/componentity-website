import { styled } from "frontity";

const Container = ({children, classes}) => {
    return (
        <ContainerWrapper className={classes}>
            {children}
        </ContainerWrapper>
    )
}

const ContainerWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin:auto;
  padding-top: 10px;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px){
    max-width: 720px;
  }
  @media (min-width: 992px){
    max-width: 960px;
  }
  @media (min-width: 1200px){
     max-width: 1200px;
  }
  img {
    width: 100%;
  }
  &.py-3 {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  &.py-10 {
    padding-top: 150px;
    padding-bottom: 150px;
    
    @media (max-width: 576px) {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }
`;

export default Container
