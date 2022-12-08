import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../../redux/action/article";
import Article from "../article/Article";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderTopInput from "../header/headertTopInp/HeaderTopInput";
import "./index.scss";

const Articles = () => {
  const [inputSearchToggle, setInputSearchToggle] = React.useState(false);
  const state = useSelector(state => state.article)
  const dispatch = useDispatch()
  console.log(state);

  const handleInputSearch = () => {
    setInputSearchToggle(!inputSearchToggle);
    // if (!inputSearchToggle) {
    //   dispatch(getArticle('')) 
    // }
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
