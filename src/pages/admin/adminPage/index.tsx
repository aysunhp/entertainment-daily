import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setAllNews } from "../../../redux/slice/newsSilce";
import { RootState } from "../../../redux/store/store";
import "../../../assets/styles/style.scss";

const index = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://657f53116ae0629a3f53367d.mockapi.io/api/entertainment"
  //       );
  //       console.log("Response data:", response.data);
  //       dispatch(setAllNews(response.data));
  //       console.log("All news after dispatch:", allNews);
  //     } catch (error) {
  //       console.error("Error fetching posts", error);
  //     }
  //   };

  //   fetchPosts();
  // }, [dispatch]);

  let allNews = useSelector((state: RootState) => state.news.allNews);
  console.log(allNews);
  allNews = [...allNews].sort((a, b) =>
    a.publishedAt.localeCompare(b.publishedAt)
  );
  return (
    <>
      <h1 id="product-heading">News</h1>
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              ID
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Name
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Image
            </a>
          </div>
          <div className="header__item edit">
            <a
              id="losses"
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
          {allNews &&
            allNews.map((elem) => {
              return (
                <div className="table-row" key={elem.id}>
                  <div className="table-data">{elem.id}</div>
                  <div className="table-data">{elem.title}</div>
                  <div className="table-data projImgAdmin">
                    <img src={elem.url} />
                  </div>
                  <div className="table-data ">
                    <button className="editBtnAdmin">Edit</button>
                  </div>
                  <div className="table-data ">
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
              );
            })}
        </div>
      </div>
    </>
  );
};

export default index;
