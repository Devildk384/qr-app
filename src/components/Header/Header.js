import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Avatar from "@material-ui/core/Avatar";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__search-box">
        <div className="header__search-icon">
          <SearchIcon />
        </div>
        <InputBase placeholder="Search…" className="header__search-input" />
      </div>
      <div className="header__icons">
        <div className="header__icon">
          <div className="header__icon-item">
            {" "}
            <DashboardOutlinedIcon />
          </div>
          <div className="header__icon-item">
            <NotificationsNoneOutlinedIcon />
          </div>
          <div className="header__icon-item">
            <ChatBubbleOutlineOutlinedIcon />
          </div>
        </div>
        <div className="header__avatar">
          <div className="header__avatar-item">
            <Avatar />
          </div>
          <div className="header__avatar-text">
            <h3>Durgesh Kumar</h3>
            <div className="">Admin Owner</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
