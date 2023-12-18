import { useDispatch } from "react-redux";
import "./App.css";
import { routes } from "./routes/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter(routes);
import { useEffect } from "react";
import axios from "axios";
import { setAllNews } from "./redux/slice/newsSilce";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
