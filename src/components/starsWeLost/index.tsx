import Addvertisement from "../advertisement";

const StarsWeLost = () => {
  return (
    <>
      <div className="stars-we-lost-section">
        <div className="container">
          <div className="title">Stars We Lost</div>
          <div className="star-cards">
            <div className="card1 card">
              <div className="img-wrapper">
                <img
                  src="https://ew.com/thmb/GR_X09q7TcR6Bdn3no_ochW5NvI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Andre-Braugher-121223-tout-3-3759a06356d049768b66cc15f6197620.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <span className="category">TV</span>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <span className="by">By Elian Wrast</span>
              </div>
            </div>
            <div className="card2 card">
              {" "}
              <div className="img-wrapper">
                <img
                  src="https://ew.com/thmb/GR_X09q7TcR6Bdn3no_ochW5NvI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Andre-Braugher-121223-tout-3-3759a06356d049768b66cc15f6197620.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <span className="category">TV</span>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <span className="by">By Elian Wrast</span>
              </div>
            </div>
            <div className="card3 card">
              {" "}
              <div className="img-wrapper">
                <img
                  src="https://ew.com/thmb/GR_X09q7TcR6Bdn3no_ochW5NvI=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Andre-Braugher-121223-tout-3-3759a06356d049768b66cc15f6197620.jpg"
                  alt=""
                />
              </div>
              <div className="content">
                <span className="category">TV</span>
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

export default StarsWeLost;
