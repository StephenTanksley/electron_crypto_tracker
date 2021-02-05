import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { StyledMenuItem, AlignmentContainer } from "../../Styles/styled";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

export const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <AlignmentContainer>
              <div className="logotext">
                <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
              </div>
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </AlignmentContainer>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <StyledMenuItem active={true} icon={<FiHome />}>
                Home
              </StyledMenuItem>
              <StyledMenuItem icon={<FaList />}>
                {" "}
                Followed Feeds{" "}
              </StyledMenuItem>
              <StyledMenuItem icon={<FaRegHeart />}>
                Tracked Currencies
              </StyledMenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};
