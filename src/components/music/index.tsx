import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/style.scss";
import { useEffect } from "react";
import { fetchNews } from "../../redux/slice/newsSilce";
import { RootState } from "../../redux/store/store";

const Music = () => {
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
  allNews = allNews.filter((item) => item.category === "music");

  return (
    <>
      <div className="music-section">
        <div className="container">
          <div className="title">
            <div className="title-logo"></div>
            <span>Music</span>
          </div>
          <div className="music-news-wrapper">
            <div className="music-news-left-sect">
              <div className="img-wrapper">
                <img src={allNews[0].urlToImage} alt="" />
              </div>
              <div className="img-content">
                <div className="time-category">
                  <span className="category">{allNews[0].category}</span>
                  <span className="time">{allNews[0].publishedAt}</span>
                </div>
                <h1>{allNews[0].content}.</h1>
                <span className="by">By {allNews[0].author}</span>
              </div>
            </div>
            <div className="music-news-right-sect">
              {allNews &&
                allNews.slice(1, 5).map((item) => {
                  return (
                    <div className="music-news">
                      <div className="music-news-box">
                        <div className="news-img">
                          <img src={item.urlToImage} alt="" />
                        </div>
                        <div className="music-news-img-content">
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

export default Music;
