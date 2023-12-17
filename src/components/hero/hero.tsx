import "../../assets/styles/style.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-img-wrapper">
        <img
          src="https://ew.com/thmb/RDnl4pPOGQPQ_CtRWM0S8zRF6mE=/1220x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PERCY-JACKSON-AND-THE-OLYMPIANS-120823-05-d456e7f96c154f75bfdc859f78453b7a.jpg"
          alt=""
        />
      </div>
      <div className="content">
        <h2>TV</h2>
        <span className="link_wrapper">
          Inside the Herculean task of perfecting{" "}
          <em>Percy Jackson and the Olympians</em>
        </span>
        <p>
          Rick Riordan's beloved books are finally getting a worthy adaptation.
        </p>
        <span className="by">
          by <b>Christian Holub</b>
        </span>
      </div>
    </div>
  );
};

export default Hero;
