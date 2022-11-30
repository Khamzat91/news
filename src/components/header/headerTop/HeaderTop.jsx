import React from "react";
import logo from "../../../images/logo.png";
import { ReactComponent as Search } from "../../../images/content/search.svg";
import { ReactComponent as User } from "../../../images/content/user.svg";
import { ReactComponent as Edit } from "../../../images/content/edit.svg";
import { ReactComponent as Logout } from "../../../images/content/logout.svg";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";

const HeaderTop = ({ handleInputSearch }) => {
  const isAuth = React.useState(false);
  const navigate = useNavigate();

  const onClickLinkLogin = () => {
    navigate("/login");
  };
  return (
    <div className="header-top">
      <div className="header-top__inner">
        <a className="header-top__inner-logo" href="#">
          <img src={logo} alt="" />
        </a>
        <div className="header-top__inner-icons">
          <Search
            onClick={handleInputSearch}
            className="header-top__inner-icons__search"
          />
          {!isAuth ? (
            <>
             <Link to="/editarticle"><Edit title="Написать" className="header-top__inner-icons__edit"/></Link>
              <Logout className="header-top__inner-icons__logout"/>
            </>
          ) : (
            <User
              onClick={onClickLinkLogin}
              className="header-top__inner-icons__user"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
