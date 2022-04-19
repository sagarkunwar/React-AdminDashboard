import React from "react";
import "../navbar/navbar.scss";

import Sagar from "../../image/sagar.jpg";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" /> English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img src={Sagar} alt="" className="avatar" />
          </div>
          <div className="item">
            <SettingsIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
