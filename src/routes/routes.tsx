import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home";
import AdminRoot from "../pages/admin/adminRoot";
import AddNews from "../pages/admin/addNews";
import AdminPage from "../pages/admin/adminPage";
export const routes = [
  {
    path: "/",
    element: <UserRoot />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },

      {
        path: "/admin/add",
        element: <AddNews />,
      },
    ],
  },
];
