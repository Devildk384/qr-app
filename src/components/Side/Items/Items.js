import React from "react";
import { useHistory } from "react-router-dom";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import PublicIcon from "@material-ui/icons/Public";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import "./Items.scss";

function Items() {
  const history = useHistory();

  return (
    <ul className="items__menu">
      <li
        className="items__menu-list"
        onClick={() => history.push("./admintype")}
      >
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <SupervisorAccountOutlinedIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Admin Type</div>
        </a>
      </li>
      <li
        className="items__menu-list"
        onClick={() => history.push("./language")}
      >
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <LanguageOutlinedIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Language</div>
        </a>
      </li>
      <li
        className="items__menu-list"
        onClick={() => history.push("./countries")}
      >
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <PublicIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Countries</div>
        </a>
      </li>
      <li className="items__menu-list" onClick={() => history.push("./cities")}>
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <LocationCityIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Cities</div>
        </a>
      </li>
      <li className="items__menu-list">
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <SupervisorAccountOutlinedIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Admin Type</div>
        </a>
      </li>
      <li className="items__menu-list">
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <SupervisorAccountOutlinedIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Admin Type</div>
        </a>
      </li>
      <li className="items__menu-list">
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <SupervisorAccountOutlinedIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Admin Type</div>
        </a>
      </li>
      <li className="items__menu-list">
        <a className="items__menu-item">
          <div className="items__menu-item-icon">
            <SupervisorAccountOutlinedIcon style={{ fill: "black" }} />
          </div>
          <div className="items__menu-item-text">Admin Type</div>
        </a>
      </li>
    </ul>
  );
}

export default Items;
