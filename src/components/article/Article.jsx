import React from "react";
import articlePost from "../../images/articlePost.png";
import { ReactComponent as Viewing } from "../../images/content/viewing.svg";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderTopInput from "../header/headertTopInp/HeaderTopInput";
import "./index.scss";

const Article = ({
  title = "Какой-то очень интересный заголовок",
  text = " На работе потребовалось запилить задачу для автоматического определения города при совершении заказа",
}) => {
const [inputSearch, setInputSearch] = React.useState(false);

const handleInputSearch = () => {
    setInputSearch(!inputSearch)
}

  return (
    <div className="article">
      {inputSearch ? <HeaderTopInput handleInputSearch={handleInputSearch}/> 
      : <HeaderTop handleInputSearch={handleInputSearch}/>
     }
      <div className="article__inner active">
      <div className="article__info">
        <div className="article__info-title">{title}</div>
        <div className="article__info-text">{text}</div>
        <div className="article__info-date">
          <div className="article__info-date__published">
            12 августа 2019 в 08:06
          </div>
          <div className="article__info-date__viewing">
            <Viewing />
            <span>55</span>
          </div>
        </div>
      </div>
      <div className="article__image">
        <img src={articlePost} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Article;
