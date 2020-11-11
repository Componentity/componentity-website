import React from "react";
import { css } from "frontity";

const Logo = () => {
  return (
    <>
      <img
        css={css`
          width: 150px !important;
        `}
        src="https://comoponentity.files.wordpress.com/2020/11/124ed-logo-componentity-e28093-9-e1596899312917.png"
        alt="Componentity"
      />
    </>
  );
};

export default Logo;
