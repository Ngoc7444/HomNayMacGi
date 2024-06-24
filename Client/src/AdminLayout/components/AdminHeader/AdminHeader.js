import React from "react";
import "./AdminHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell, faGear } from "@fortawesome/free-solid-svg-icons";
const AdminHeader = () => {
  return (
    <div className="admin-header">
      <div className="admin-header__inner">
        <div className="admin-header__right">
          <div className="admin-header__icon">
            <div className="admin-header__icon__mail">
              <button class="icon-btn">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="icon-span">8</span>
              </button>
            </div>
            <div className="admin-header__icon__notification">
              <button class="icon-btn">
                <FontAwesomeIcon icon={faBell} />
                <span className="icon-span">10</span>
              </button>
            </div>
            <div className="admin-header__icon__setting">
              <button class="icon-btn">
                <FontAwesomeIcon icon={faGear} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
