import React from "react";
import "./Sidebar.scss";
import Items from "./Items/Items";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header-title">
          <h2>Admin panel</h2>
        </div>
      </div>

      <div className="sidebar__dashboard">
        <Items />
      </div>
    </div>
  );
}

export default Sidebar;
