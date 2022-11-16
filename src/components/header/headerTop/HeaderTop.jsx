import React from "react";
import logo from "../../../images/logo.png";
import { ReactComponent as Search } from "../../../images/content/search.svg";
import { ReactComponent as User } from "../../../images/content/user.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const HeaderTop = ({handleInputSearch}) => {
  const navigate = useNavigate()

  const onClickLinkLogin = () => {
    navigate("/login")
  }
  return (
    <div className="header-top">
      <div className="header-top__inner">
        <a className="header-top__inner-logo" href="#">
           <img src={logo} alt="" />
        </a>
        <div className="header-top__inner-box">
            <Search onClick={handleInputSearch} className="header-top__inner-box__search"/>
            <User onClick={onClickLinkLogin} className="header-top__inner-box__user"/>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
