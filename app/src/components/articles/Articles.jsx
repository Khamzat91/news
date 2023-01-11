import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/action/articles";
import Article from "../article/Article";
import HeaderTop from "../header/headerTop/HeaderTop";
import HeaderTopInput from "../header/headertTopInp/HeaderTopInput";
import "./index.scss";

const Articles = () => {
  const [inputSearchToggle, setInputSearchToggle] = React.useState(false);
  const articles = useSelector((state) => state.articles.data);
  const dispatch = useDispatch();
  const handleInputSearch = () => {
    setInputSearchToggle(!inputSearchToggle);
    if (!inputSearchToggle) {
      dispatch(getArticles(''))
    }
  };
  React.useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <div className="articles-main">
      {inputSearchToggle ? (
        <HeaderTopInput handleInputSearch={handleInputSearch} />
      ) : (
        <HeaderTop handleInputSearch={handleInputSearch} />
      )}
      {articles?.map((article) => <Article
          key={article._id}
          id={article._id}
          title={article.title}
          text={article.text}
          description={article.description}
          views={article.views}
          createdAt={article.createdAt}
        />
      )}
      
    </div>
  );
};

export default Articles;
