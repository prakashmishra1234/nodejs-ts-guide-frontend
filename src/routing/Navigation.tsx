import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../component/unauthenticated/Login";
import AuthLayout from "../component/layout/AuthLayout";
import SignUp from "../component/unauthenticated/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hello World</>,
    // children: [
    //   {
    //     path: "home",
    //     element: <Home />,
    //   },
    //   {
    //     path: "profile",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "users",
    //     element: (
    //       // <AdminRoute>
    //       <UserManagement />
    //       // </AdminRoute>
    //     ),
    //   },
    // ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
