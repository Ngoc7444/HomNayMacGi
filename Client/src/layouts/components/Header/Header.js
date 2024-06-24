import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import config from "../../../config";
import { AuthContext } from "../../../AuthContext";
import "./Header.css";
import logo from "../../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // const { logout } = useAuthNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="inner">
        <div className="header__logo">
          <Link to={config.routes.home} className="header__logo__link">
            <img src={logo} alt="logo" className="header__logo__img" />
          </Link>
        </div>
        <nav className="header__menu">
          <div className="header__menu__list">
            <Link className="header__menu__item">Collections</Link>
            <Link to="/fashion-consultant" className="header__menu__item">
              Fashion Consultant
            </Link>
            <Link className="header__menu__item">Calendar</Link>
          </div>
        </nav>

        <div onClick={handleDropdownToggle}>
          <div className="user-login_signup">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {dropdownOpen && (
            <DropdownMenu>
              {user ? (
                <>
                  <Link to={config.routes.profile} className="dropdown-item">
                    Hồ sơ cá nhân
                  </Link>
                  <li onClick={logout} className="popper-item">
                    Đăng xuất
                  </li>
                </>
              ) : (
                <>
                  <Link to={config.routes.login} className="dropdown-item">
                    Đăng nhập
                  </Link>
                  <Link to={config.routes.register} className="dropdown-item">
                    Đăng ký
                  </Link>
                </>
              )}
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
