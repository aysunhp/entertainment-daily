import "../../../assets/styles/style.scss";
import Addvertisement from "../../../components/advertisement";
import Footer from "../../../components/footer";
import FromtheArchives from "../../../components/fromtheArchives";
import Hero from "../../../components/hero/hero";
import MoreNews from "../../../components/moreNews";
import Movies from "../../../components/movies";
import Music from "../../../components/music";
import NewsSection from "../../../components/newsSection";
import StarsWeLost from "../../../components/starsWeLost";
import TheAwardists from "../../../components/theAwardists";

const Home = () => {
  return (
    <>
      <div className="container">
        <Hero />
        {/* <NewsSection /> */}
        <div
          className="container-addvertisement"
          style={{ backgroundColor: "white", marginTop: "25px" }}
        >
          <div className="container">
            <div className="addvertisement" style={{ paddingTop: "50px" }}>
              Addvertisement
            </div>
            <div className="addvertisement-img">
              <img
                src="https://tpc.googlesyndication.com/simgad/8798301764677883705"
                alt=""
              />
            </div>
            <div className="addvertisement" style={{ paddingBottom: "50px" }}>
              Addvertisement
            </div>
          </div>
        </div>
        {/* <Movies /> */}
        <FromtheArchives />
        {/* <Music /> */}
        <TheAwardists />
        {/* <MoreNews /> */}
        <StarsWeLost />
      </div>
    </>
  );
};

export default Home;
