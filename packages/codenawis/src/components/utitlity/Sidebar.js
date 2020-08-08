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
    position: sticky;
    top: 20px;
    padding: 20px;
    background-color: #F9FAFB;
`;