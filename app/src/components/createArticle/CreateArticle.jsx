import React from "react";
import { useDispatch } from "react-redux";
import load from "../../images/content/load.svg";
import { createArticle } from "../../redux/action/articles";
import "./index.scss";

const CreateArticle = () => {
  const [data, setData] = React.useState({
    title: "",
    text: "",
    file: "",
    description: "",
  });
  const dispatch = useDispatch();

  const handleChangeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
   await dispatch(createArticle(data));
    setData({
      title: "",
      text: "",
      file: "",
      description: "",
    });
  };

  return (
    <div className="create-article">
      <label className="create-article__title">
        <input
          onChange={handleChangeData}
          value={data.title}
          name="title"
          type="text"
          placeholder="Введите заголовок..."
        />
      </label>
      <div className="create-article__inner">
        <div className="create-article__inner-shortpicture title">
          Короткое описание
        </div>
        <label className="create-article__inner-titleinp">
          <input
            onChange={handleChangeData}
            value={data.text}
            name="text"
            type="text"
          />
        </label>
        <div className="create-article__inner-link">
          <div className="create-article__inner-link__title title">
            Ссылка на изображение:
          </div>
          <div className="input__wrapper">
            <input
              onChange={handleChangeData}
              value={data.file}
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
        <div className="create-article__inner-fullpicture title">
          Полное описание
        </div>
        <label className="create-article__inner-descriptionarea">
          <textarea onChange={handleChangeData} value={data.description} name="description" type="text" />
        </label>
        <div onClick={onSubmit} className="create-article__inner-btnpublish">Опубликовать</div>
      </div>
    </div>
  );
};

export default CreateArticle;
