import Addvertisement from "../advertisement";

const TheAwardists = () => {
  return (
    <>
      <div className="awardists-section">
        <div className="container">
          <div className="title">The Awardists</div>
          <div className="star-cards">
            <div className="card1 card">
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
            <div className="card2 card">
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

export default TheAwardists;
