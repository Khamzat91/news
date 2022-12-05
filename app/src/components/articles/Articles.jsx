import React from "react";
import Article from "../article/Article";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderTopInput from "../header/headertTopInp/HeaderTopInput";
import "./index.scss";

const Articles = () => {
  const [inputSearchToggle, setInputSearchToggle] = React.useState(false);
  

  const handleInputSearch = () => {
    setInputSearchToggle(!inputSearchToggle);
  };


  return (
    <div className="articles-main">
      {inputSearchToggle ? (
        <HeaderTopInput handleInputSearch={handleInputSearch} />
      ) : (
        <HeaderTop handleInputSearch={handleInputSearch} />
      )}
        <Article/>
    </div>
  );
};

export default Articles;
