import React from "react";
import logo from "../../../images/logo.png";
import { ReactComponent as Search } from "../../../images/content/search.svg";
import { ReactComponent as User } from "../../../images/content/user.svg";
import "./index.scss";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="header-top__inner">
        <a className="header-top__inner-logo" href="#">
           <img src={logo} alt="" />
        </a>
        <div className="header-top__inner-box">
            <Search className="header-top__inner-box__search"/>
            <User className="header-top__inner-box__user"/>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
