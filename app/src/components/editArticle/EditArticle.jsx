import React from "react";
import load from "../../images/content/load.svg";
import "./index.scss";

const EditArticle = () => {
  return (
    <div className="edit-article">
      <label className="edit-article__title">
        <input type="text" placeholder="Введите заголовок..." />
      </label>
      <div className="edit-article__inner">
        <div className="edit-article__inner-shortpicture title">
          Короткое описание
        </div>
        <label className="edit-article__inner-titleinp">
          <input type="text" />
        </label>
        <div className="edit-article__inner-link">
          <div className="edit-article__inner-link__title title">
            Ссылка на изображение:
          </div>
          <div className="input__wrapper">
            <input
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              multiple
            />
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">
                <img className="input__file-icon" src={load} alt="" width="25" />
              </span>
              <span className="input__file-button-text">Загрузить</span>
            </label>
          </div>
        </div>
        <div className="edit-article__inner-fullpicture title">
        Полное описание
        </div>
        <label className="edit-article__inner-descriptionarea">
          <textarea/>
        </label>
        <div className="edit-article__inner-btn">
        <div className="edit-article__inner-btn__delete">Удалить</div>
        <div className="edit-article__inner-btn__hold">Сохранить</div>
        
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
