import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/slice/newsSilce";
import { RootState } from "../../redux/store/store";

const MoreNews = () => {
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

  allNews = allNews.filter(
    (item) => item.category === "binge" || "celebrity" || "book"
  );

  return (
    <>
      <div className="more-news-section">
        <div className="container">
          <div className="title">
            <div className="title-logo"></div>
            <span>More News</span>
          </div>
          <div className="news-container">
            {allNews &&
              allNews.slice(0, 10).map((item) => {
                return (
                  <div className="news-wrapper">
                    <div className="latest-news-box">
                      <div className="news-img">
                        <img src={item.urlToImage} alt="" />
                      </div>
                      <div className="news-content">
                        <div className="time-category">
                          <span className="category">{item.category}</span>
                          <span className="time">{item.publishedAt}</span>
                        </div>
                        <p>{item.description}</p>
                        <span className="by">By {item.author}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreNews;
