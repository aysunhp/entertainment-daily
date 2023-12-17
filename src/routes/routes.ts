import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/index.tsx";
import Home from "../pages/user/home/index.tsx";
export const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/products",
//         element: <Products />,
//       },
//       {
//         path: "/products/:id",
//         element: <Detail />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/register",
//         element: <Register />,
//       },
//     ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/productsA",
        element: <ProductsA />,
      },
      {
        path: "/admin/productsAdd",
        element: <AddProducts />,
      },
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);
