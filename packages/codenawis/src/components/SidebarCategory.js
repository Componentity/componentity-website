import { React, useState, useEffect } from "react";
import Sidebar from "./utitlity/Sidebar";
import HoverLink from "./utitlity/HoverLink";
import UL from "./utitlity/UL";

const SidebarCategory = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://public-api.wordpress.com/wp/v2/sites/comoponentity.wordpress.com/categories?parent=2"
      );
      response = await response.json();
      console.log("Response", response);
      setCat(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <Sidebar>
      <UL>
        {cat.map((categoryWidget) => {
          const category = categoryWidget.slug;
          return (
            <li key={categoryWidget}>
              <FlexCenter className="justify-start">
                <svg
                  fill="#9B5DE5"
                  className="arrow-right"
                  height="10px"
                  width="10px"
                  aria-hidden="true"
                  focusable="false"
                  height="12px"
                  data-prefix="fas"
                  data-icon="chevron-left"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
                </svg>
                <HoverLink link={"/" + category}>
                  {categoryWidget.name}
                </HoverLink>
              </FlexCenter>
            </li>
          );
        })}
      </UL>
    </Sidebar>
  );
};

export default SidebarCategory;
