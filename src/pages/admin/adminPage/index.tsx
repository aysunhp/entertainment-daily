import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setAllNews } from "../../../redux/slice/newsSilce";
import { RootState } from "../../../redux/store/store";
import "../../../assets/styles/style.scss";

const index = () => {
  // console.log(allNews);
  // allNews = [...allNews].sort((a, b) =>
  //   a.publishedAt.localeCompare(b.publishedAt)
  // );
  return (
    <>
      <h1 id="product-heading">News</h1>
      <div className="table">
        <div className="table-header">
          <div className="header__item id">
            <a id="wins" className="filter__link filter__link--number" href="#">
              ID
            </a>
          </div>
          <div className="header__item category">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Category
            </a>
          </div>
          <div className="header__item content">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Content
            </a>
          </div>
          <div className="header__item title">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Title
            </a>
          </div>
          <div className="header__item url">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Url
            </a>
          </div>
          <div className="header__item image">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Image
            </a>
          </div>
          <div className="header__item edit">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              Edit
            </a>
          </div>
          <div className="header__item delete">
            <a
              id="total"
              className="filter__link filter__link--number"
              href="#"
            >
              Delete
            </a>
          </div>
        </div>
        <div className="table-content">
          <div className="table-row">
            <div className="table-data id">ID</div>
            <div className="table-data category">Category</div>
            <div className="table-data content">Content</div>
            <div className="table-data title">Title</div>
            <div className="table-data url">url</div>
            <div className="table-data image">
              <img src="huhyg" />
            </div>
            <div className="table-data  edit">
              <button className="editBtnAdmin">Edit</button>
            </div>
            <div className="table-data delete">
              <button
                className="deleteBtnAdmin"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
