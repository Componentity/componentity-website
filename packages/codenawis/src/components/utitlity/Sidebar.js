import { styled } from "frontity";

const Sidebar = ({children}) => {
    return (
          <SidebarCss>
            {children}
          </SidebarCss> 
    )
}
export default Sidebar

const SidebarCss = styled.div`
    padding: 20px;
    padding-left: 30px;
    background-color: #1d3557;
    a {
      color: white;
    }
    b {
      color: white;
    }
`;