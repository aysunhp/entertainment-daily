import Television from "../television";
import "../../assets/styles/style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/slice/newsSilce";

const NewsSection = () => {
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
  console.log(allNews);
  let moreWhached = [...allNews].sort(
    (a, b) => a.numberOfNews - b.numberOfNews
  );
  console.log(moreWhached);
  let moreLiked = [...allNews].sort((a, b) => a.likedNumber - b.likedNumber);
  console.log(moreLiked);
  return (
    <>
      <div className="news-section">
        <div className="main-section">
          <div className="mustReads-topStory">
            <div className="left-section">
              <div className="latest-news-logo"></div>
              {allNews &&
                allNews.slice(0, 19).map((item) => {
                  return (
                    <div className="news-wrapper">
                      <div className="latest-news">
                        <div className="time-category">
                          <span className="category">{item.category}</span>
                          <span className="time">{item.publishedAt}</span>
                        </div>
                        <div className="latest-news-box">
                          <div className="news-img">
                            <img src={item.urlToImage} alt="" />
                          </div>
                          <div className="news-img-content">
                            <p>{item.title}</p>
                            <span className="by">By {item.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="right-full">
              <div className="part-wrapper">
                <div className="left-part">
                  <div className="image-wrapper">
                    <img
                      src={moreWhached && moreWhached[0].urlToImage}
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h1>{moreWhached && moreWhached[0].title}</h1>
                    <p>{moreWhached && moreWhached[0].content}</p>
                    <span>By {moreWhached && moreWhached[0].author}</span>
                  </div>
                </div>
                <div className="right-part">
                  <div className="must-reads-logo">MUST READS</div>
                  {moreWhached &&
                    moreWhached.slice(1, 5).map((item) => {
                      return (
                        <div className="news-wrapper">
                          <div className="latest-news">
                            <div className="time-category">
                              <span className="category">{item.category}</span>
                              <span className="time">{item.publishedAt}</span>
                            </div>
                            <div className="latest-news-box">
                              <div className="news-img-content">
                                <p>{item.title}</p>
                                <span className="by">By {item.author}</span>
                              </div>
                              <div className="news-img">
                                <img src={item.urlToImage} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="entertainers">
                <div className="entertainer-title">
                  <h1>Lorem, ipsum dolor.</h1>
                </div>
                <div className="entertainer-parts">
                  <div className="entertainer-left">
                    <div className="img-wrapper">
                      <img src={moreLiked && moreLiked[0].urlToImage} alt="" />
                    </div>
                    <div className="content">
                      <span>{moreLiked && moreLiked[0].category}</span>
                      <h1>{moreLiked && moreLiked[0].title}</h1>
                      <span>By {moreLiked && moreLiked[0].author}</span>
                    </div>
                  </div>
                  <div className="entertainer-right">
                    <div className="news-wrapper">
                      {moreLiked &&
                        moreLiked.slice(1, 5).map((item) => {
                          return (
                            <div className="latest-news">
                              <div className="latest-news-box">
                                <div
                                  className="news-image"
                                  style={{ width: "144px", height: "95px" }}
                                >
                                  <img src={item.urlToImage} alt="" />
                                </div>
                                <div className="news-img-content">
                                  <div className="time-category">
                                    <span className="category">
                                      {item.category}
                                    </span>
                                    <span className="time">
                                      {item.publishedAt}
                                    </span>
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
              <Television />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
