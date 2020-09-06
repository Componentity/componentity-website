import { styled } from "frontity";

const ContainerFull = ({children, classes, bgImage}) => {

    return (
        <ContainerFullWrapper className={classes} bgImage={bgImage}>
            {children}
        </ContainerFullWrapper>
    )
}

const ContainerFullWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin:auto;
  padding-top: 10px;
  width: 100%;

  background-size: cover;
  background-position: center;
  background-image: url(${props => props.bgImage || ""});

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

export default ContainerFull
