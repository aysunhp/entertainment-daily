import "../../assets/styles/style.scss";
const Music = () => {
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
                <img
                  src="https://ew.com/thmb/09CpMujH8dRbNFT8jrdx45ukUZc=/771x514/filters:no_upscale():max_bytes(150000):strip_icc()/BW23-best-albums-5a52b65520c44c548f3a37620f7a1c1e.jpg"
                  alt=""
                />
              </div>
              <div className="img-content">
                <div className="time-category">
                  <span className="category">TV</span>
                  <span className="time">12 hours ago</span>
                </div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <span className="by">
                  By Lester Fabian Brathwaite, Maura Johnston, Jason Lamphier,
                  Allaire Nuss, and Emlyn Travis
                </span>
              </div>
            </div>
            <div className="music-news-right-sect">
              <div className="latest-news">
                <div className="time-category">
                  <span className="category">TV</span>
                  <span className="time">12 hours ago</span>
                </div>
                <div className="latest-news-box">
                  <div className="news-img-content">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <span>By Clarc Colins</span>
                  </div>
                  <div className="news-img">
                    <img
                      src="https://ew.com/thmb/1F5vv1kStbhfcLalyNC4rzuKe9Q=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/finneas-and-billie-eilish-barbie-1-tout--121523-d80a9f1446dd486b9233666ca0ef76d1.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
