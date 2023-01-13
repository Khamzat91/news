import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle, editArticle } from "../../redux/action/articles";
import load from "../../images/content/load.svg";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const EditArticle = () => {
  const article = useSelector((state) => state.articles.article);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [data, setData] = React.useState({
    title: "",
    text: "",
    file: "",
    description: "",
  });

  const changeEditData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const ChangeDataFile = (e) => {
    setData(e.target.file);
  };

  React.useEffect(() => {
    setData({
      title: article?.title,
      text: article?.text,
      description: article?.description,
    });
  }, [article]);

  const onSubmitEdit = () => {
    dispatch(editArticle(article._id, data));
    setData({
      title: "",
      text: "",
      description: "",
    });
  };

  const onSubmitDelete = () => {
    dispatch(deleteArticle(article._id));
   navigate('/')
  };

  return (
    <div className="edit-article">
      <label className="edit-article__title">
        <input
          onChange={changeEditData}
          value={data.title}
          name="title"
          type="text"
          placeholder="Введите заголовок..."
        />
      </label>
      <div className="edit-article__inner">
        <div className="edit-article__inner-shortpicture title">
          Короткое описание
        </div>
        <label className="edit-article__inner-titleinp">
          <input
            onChange={changeEditData}
            value={data.text}
            name="text"
            type="text"
          />
        </label>
        <div className="edit-article__inner-link">
          <div className="edit-article__inner-link__title title">
            Ссылка на изображение:
          </div>
          <div className="input__wrapper">
            <input
              onChange={ChangeDataFile}
              value={data.file}
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              multiple
            />
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">
                <img
                  className="input__file-icon"
                  src={load}
                  alt=""
                  width="25"
                />
              </span>
              <span className="input__file-button-text">Загрузить</span>
            </label>
          </div>
        </div>
        <div className="edit-article__inner-fullpicture title">
          Полное описание
        </div>
        <label className="edit-article__inner-descriptionarea">
          <textarea
            onChange={changeEditData}
            value={data.description}
            name="description"
          />
        </label>
        <div className="edit-article__inner-btn">
          <div onClick={onSubmitDelete} className="edit-article__inner-btn__delete">Удалить</div>
          <div onClick={onSubmitEdit} className="edit-article__inner-btn__hold">
            Сохранить
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
