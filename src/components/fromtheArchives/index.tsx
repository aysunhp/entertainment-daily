import Addvertisement from "../advertisement";
import "../../assets/styles/style.scss";

const FromtheArchives = () => {
  return (
    <>
      <div className="from-the-archives-section">
        <div className="container">
          <div className="title">From the Archives</div>
          <div className="star-cards">
            <div className="card1 card">
              <div className="img-wrapper">
                <img
                  src="https://ew.com/thmb/rGEdGDcuOXb2MwKqniqllI7xnJA=/364x242/filters:no_upscale():max_bytes(150000):strip_icc()/000242625-ac6a0bb2d896407a8c89ecd3ddf1d7ba.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="time-category">
                  <span className="category">TV</span>
                  <span className="time">12 hours ago</span>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <span className="by">By Elian Wrast</span>
              </div>
            </div>
            <div className="card2 card">
              {" "}
              <div className="img-wrapper">
                <img
                  src="https://ew.com/thmb/zvBK0TzuQ4-AWQPg_i4UYdZOllg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc()/hunger-games-red-carpet-111023-92aea8500b1f4102ab064c12497a33bf.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="time-category">
                  <span className="category">TV</span>
                  <span className="time">12 hours ago</span>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <span className="by">By Elian Wrast</span>
              </div>
            </div>
            <div className="card3 card">
              {" "}
              <div className="img-wrapper">
                <img
                  src="https://ew.com/thmb/YwW22jtRgEIGwzRGYY5yuy_LxzY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/awardist-predictions-121323-a04550b301bb4c5093690bab6f466db8.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="time-category">
                  <span className="category">TV</span>
                  <span className="time">12 hours ago</span>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <span className="by">By Elian Wrast</span>
              </div>
            </div>
          </div>
        </div>
        <Addvertisement />
      </div>
    </>
  );
};

export default FromtheArchives;
