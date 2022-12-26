import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticle } from "../../redux/action/articles";
import Article from "../article/Article";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderTopInput from "../header/headertTopInp/HeaderTopInput";
import "./index.scss";

const Articles = () => {
  const [inputSearchToggle, setInputSearchToggle] = React.useState(false);
  const articles = useSelector(state => state.articles.data)
  const dispatch = useDispatch()
console.log(articles.id);
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
{articles?.map((article) => <Article key={article._id}/>)}
        
    </div>
  );
};

export default Articles;
