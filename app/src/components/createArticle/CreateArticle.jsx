import React from "react";
import load from "../../images/content/load.svg";
import "./index.scss";

const CreateArticle = () => {
  return (
    <div className="create-article">
      <label className="create-article__title">
        <input type="text" placeholder="Введите заголовок..."/>
      </label>
      <div className="create-article__inner">
        <div className="create-article__inner-shortpicture title">
          Короткое описание
        </div>
        <label className="create-article__inner-titleinp">
          <input type="text" />
        </label>
        <div className="create-article__inner-link">
          <div className="create-article__inner-link__title title">
            Ссылка на изображение:
          </div>
          <div class="input__wrapper">
            <input
              name="file"
              type="file"
              id="input__file"
              class="input input__file"
              multiple
            />
            <label for="input__file" class="input__file-button">
              <span class="input__file-icon-wrapper">
                <img class="input__file-icon" src={load} alt="" width="25" />
              </span>
              <span class="input__file-button-text">Загрузить</span>
            </label>
          </div>
        </div>
        <div className="create-article__inner-fullpicture title">
          Полное описание
        </div>
        <label className="create-article__inner-descriptionarea">
          <textarea type="text" />
        </label>
        <div className="create-article__inner-btnpublish">Опубликовать</div>
      </div>
    </div>
  );
};

export default CreateArticle;
