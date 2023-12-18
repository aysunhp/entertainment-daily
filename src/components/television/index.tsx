import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchNews } from "../../redux/slice/newsSilce";



const Television = () => {
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
  allNews = allNews.filter((item) => item.category === "tv");
  console.log(allNews);
  return (
    <>
      <div className="television-section">
        <div className="container">
          <div className="title">
            <div className="title-logo"></div>
            <span>Television</span>
          </div>
          <div className="television-news-wrapper">
            <div className="television-news-left-sect">
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
            <div className="television-news-right-sect">
              {allNews &&
                allNews.slice(1, 6).map((item) => {
                  return (
                    <div className="television-news">
                      <div className="television-news-box">
                        <div className="news-img">
                          <img src={item.urlToImage} alt="" />
                        </div>
                        <div className="television-news-img-content">
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

export default Television;
