import React from 'react'
import Link from '../link';
import { styled } from 'frontity';

const HoverLink = ({children, link, className}) => {
    return (
        <HoverLinkCss>
            <Link className={className} link={link}>
                {children}
            </Link>
        </HoverLinkCss>
    )
}

const HoverLinkCss = styled(Link)`
  a {
    color: black;
  }
  a:hover a {
    transition: all .5s;
    color: #9B5DE5 !important;
    text-decoration: none;
  }
`;

export default HoverLink
