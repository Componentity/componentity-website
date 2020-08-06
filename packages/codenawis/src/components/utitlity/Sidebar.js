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
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`;