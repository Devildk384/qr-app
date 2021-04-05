import React from "react";
import "./AdminType.scss";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InputBase from "@material-ui/core/InputBase";
import AdminTypeTable from "./AdminTypeTable";

function AdminType() {
  return (
    <div className="admintype">
      <div className="admintype__title">
        <div className="admintype__title-icon">
          <HomeIcon />
          <ArrowForwardIosIcon />

          <div className="admintype__title-name">Admin Type</div>
        </div>
        <div className="admintype__title-btn">
          <button>
            <AddIcon
              style={{
                backgroundColor: "white",
                color: "008CFF",
                borderRadius: "10px",
                alignItems: "center",
              }}
            />
            <p>Create New Admin Type</p>
          </button>
        </div>
      </div>

      <div className="admintype__body">
        <div className="admintype__body-title">
          <div className="admintype__body-title-button">
            <button>Copy</button>
            <button>Excel</button>
            <button>PDF</button>
            <button>Print</button>
          </div>
          <div className="admintype__body-title-search">
            <h3>Search :</h3>
            <InputBase
              placeholder="Search…"
              className="admintype__body-title-input"
            />
          </div>
        </div>
        <div className="admintype__body-table">
          <AdminTypeTable />
        </div>
      </div>
    </div>
  );
}

export default AdminType;
