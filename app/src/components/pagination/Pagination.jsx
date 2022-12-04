import React from "react";
import prev from "../../images/content/prev.svg";
import next from "../../images/content/next.svg";
import "./index.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__inner">
        <div className="pagination__inner-arrows">
          <img src={prev} alt="" className="pagination__inner-arrows__prev" />
          <img src={next} alt="" className="pagination__inner-arrows__next" />
        </div>
        <div className="pagination__inner-pagenum">
        Страница 1 из 10
        </div>
      </div>
    </div>
  );
};

export default Pagination;
