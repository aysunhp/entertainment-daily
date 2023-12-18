import { Outlet } from "react-router-dom";
import Navbar from "../../../components/navbar";
import Addvertisement from "../../../components/advertisement";
import Footer from "../../../components/footer";

const index = () => {
  return (
    <>
      <Navbar />
      <Addvertisement />
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
