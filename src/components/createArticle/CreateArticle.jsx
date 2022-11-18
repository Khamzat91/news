import React from "react";
import { ReactComponent as Load } from "../../images/content/load.svg";
import "./index.scss";

const CreateArticle = () => {
  return (
    <div className="create-article">
      <div className="create-article__inner">
        <div className="create-article__inner-shortpicture title">Короткое описание</div>
        <label className="create-article__inner-titleinp">
          <input type="text" />
        </label>
        <div className="create-article__inner-link">
          <div className="create-article__inner-link__title title">
            Ссылка на изображение:
          </div>
          <div className="create-article__inner-link__img">
            <label className="create-article__inner-loaddowninp">
              <input type="file" />
            </label>
            <div className="create-article__inner-link__btnload">
              <Load className="create-article__inner-link__load" />
              <span>Загрузить</span>
            </div>
          </div>
        </div>
        <div className="create-article__inner-fullpicture title">Полное описание</div>
        <label className="create-article__inner-description">
            <input type="text" />
        </label>
        <div className="create-article__inner-btnpublish">Опубликовать</div>
      </div>
    </div>
  );
};

export default CreateArticle;
