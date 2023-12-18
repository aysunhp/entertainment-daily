import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/style.scss";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchNews } from "../../redux/slice/newsSilce";
import axios from "axios";
const Movies = () => {
  const dispatch = useDispatch();
  let { allNews, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  let newsData = allNews;
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  allNews = [...newsData].sort((a, b) =>
    a.publishedAt.localeCompare(b.publishedAt)
  );
  allNews = allNews.filter((item) => item.category === "movie");
  console.log(allNews);

  return (
    <>
      <div className="movie-section">
        <div className="container">
          <div className="title">
            <div className="title-logo"></div>
            <span>Movies</span>
          </div>
          <div className="movie-news-wrapper">
            <div className="movie-news-left-sect">
              <div className="img-wrapper">
                <img src={allNews[0].urlToImage} alt="" />
              </div>
              <div className="img-content">
                <div className="time-category">
                  <span className="category">{allNews[0].category}</span>
                  <span className="time">{allNews[0].publishedAt}</span>
                </div>
                <h1>{allNews[0].content}</h1>
                <span className="by">By {allNews[0].author}</span>
              </div>
            </div>
            <div className="movie-news-right-sect">
              {allNews &&
                allNews.slice(1, 5).map((item) => {
                  return (
                    <div className="movie-news">
                      <div className="movie-news-box">
                        <div className="news-img">
                          <img src={item.urlToImage} alt="" />
                        </div>
                        <div className="movie-news-img-content">
                          <div className="time-category">
                            <span className="category">{item.category}</span>
                            <span className="time">{item.publishedAt}</span>
                          </div>
                          <p>{item.title}</p>
                          <span className="by">By {item.author}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
