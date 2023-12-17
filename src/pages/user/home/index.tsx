import "../../../assets/styles/style.scss";
import Addvertisement from "../../../components/advertisement";
import Footer from "../../../components/footer";
import FromtheArchives from "../../../components/fromtheArchives";
import Hero from "../../../components/hero/hero";
import MoreNews from "../../../components/moreNews";
import Music from "../../../components/music";
import StarsWeLost from "../../../components/starsWeLost";
import TheAwardists from "../../../components/theAwardists";

const Home = () => {
  return (
    <>
      <div className="container">
        <Addvertisement />
        <Hero />
        <div className="news-section">
          <div className="main-section">
            <div className="mustReads-topStory">
              <div className="left-section">
                <div className="latest-news-logo"></div>
                <div className="news-wrapper">
                  <div className="latest-news">
                    <div className="time-category">
                      <span className="category">TV</span>
                      <span className="time">12 hours ago</span>
                    </div>
                    <div className="latest-news-box">
                      <div className="news-img">
                        <img
                          src=" https://ew.com/thmb/PiULXzV9Nwhp9dz0RO3vwzD2qhQ=/800x533/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Susan-Lucci-life-time-achievement-121523-1818633b2fe4410d82500a12a684f17a.jpg"
                          alt=""
                        />
                      </div>
                      <div className="news-img-content">
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit.
                        </p>
                        <span>By Clarc Colins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-full">
                <div className="part-wrapper">
                  <div className="left-part">
                    <div className="image-wrapper">
                      <img
                        src="  https://ew.com/thmb/PiULXzV9Nwhp9dz0RO3vwzD2qhQ=/800x533/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Susan-Lucci-life-time-achievement-121523-1818633b2fe4410d82500a12a684f17a.jpg"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <h1>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro fugiat non maiores? Est, dicta.
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur mollitia dolore molestiae commodi esse
                        accusamus dolorem aspernatur recusandae.
                      </p>
                      <span>By Emily Clack</span>
                    </div>
                  </div>
                  <div className="right-part">
                    <div className="must-reads-logo">MUST READS</div>
                    <div className="news-wrapper">
                      <div className="latest-news">
                        <div className="category">
                          <span className="category">TV</span>
                        </div>
                        <div className="latest-news-box">
                          <div className="news-img-content">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit.
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

                <div className="entertainers">
                  <div className="entertainer-title">
                    <h1>Lorem, ipsum dolor.</h1>
                  </div>
                  <div className="entertainer-parts">
                    <div className="entertainer-left">
                      <div className="img-wrapper">
                        <img
                          src="https://people.com/thmb/qzuuM1D91Z5qbeSMqW9361jACUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x425:961x427)/Adele-vegas-111922-02-2000-1dd4c7676b084c708839c27f139fc75c.jpg"
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <span>Music</span>
                        <h1>
                          Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </h1>
                        <span>By Colin Wisthley</span>
                      </div>
                    </div>
                    <div className="entertainer-right">
                      <div className="news-wrapper">
                        <div className="latest-news">
                          <div className="latest-news-box">
                            <div className="news-img">
                              <img
                                src="https://ew.com/thmb/1F5vv1kStbhfcLalyNC4rzuKe9Q=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/finneas-and-billie-eilish-barbie-1-tout--121523-d80a9f1446dd486b9233666ca0ef76d1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="news-img-content">
                              <span className="category">TV</span>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                              </p>
                              <span>By Clarc Colins</span>
                            </div>
                          </div>
                        </div>
                        <div className="latest-news">
                          <div className="latest-news-box">
                            <div className="news-img">
                              <img
                                src="https://ew.com/thmb/1F5vv1kStbhfcLalyNC4rzuKe9Q=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/finneas-and-billie-eilish-barbie-1-tout--121523-d80a9f1446dd486b9233666ca0ef76d1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="news-img-content">
                              <span className="category">TV</span>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit.
                              </p>
                              <span>By Clarc Colins</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Music />
        <FromtheArchives />
        <TheAwardists />
        <MoreNews />
        <StarsWeLost />
        <Footer />
      </div>
    </>
  );
};

export default Home;
