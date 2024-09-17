import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home-2";
import Home3 from "./Pages/Home-3";
import Course1 from "./Pages/Course-1";
import Course2 from "./Pages/Course-2";
import Course3 from "./Pages/Course-3";
import CourseSingle from "./Pages/CourseSingle";
import About1 from "./Pages/About-1";
import About2 from "./Pages/About-2";
import Instructor from "./Pages/Instructor";
import InstructorProfile from "./Pages/InstructorProfile";
import Error from "./Pages/Error";
import Blogs from "./Pages/Blogs";
import SinglePost from "./Pages/SinglePost";
import Contact from "./Pages/Contact";
import Join from "./Pages/Join";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Success from "./Pages/PaymentStatus/Success";
import Fail from "./Pages/PaymentStatus/Fail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/home-2",
  //   element: <Home2 />,
  // },
  // {
  //   path: "/home-3",
  //   element: <Home3 />,
  // },
  // {
  //   path: "/course-1",
  //   element: <Course1 />,
  // },
  // {
  //   path: "/course-2",
  //   element: <Course2 />,
  // },
  // {
  //   path: "/course-3",
  //   element: <Course3 />,
  // },
  // {
  //   path: "/single-course",
  //   element: <CourseSingle />,
  // },
  {
    path: "/about-1",
    element: <About1 />,
  },
  // {
  //   path: "/about-2",
  //   element: <About2 />,
  // },
  // {
  //   path: "/instructor",
  //   element: <Instructor />,
  // },
  // {
  //   path: "/profile",
  //   element: <InstructorProfile />,
  // },
  // {
  //   path: "/blog",
  //   element: <Blogs />,
  // },
  // {
  //   path: "/single-post",
  //   element: <SinglePost />,
  // },
  {
    path: "/payment-success",
    element: <Success />
  },
  {
    path: "/payment-fail",
    element: <Fail />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/join-for-free",
    element: <Join />
  },
  {
    path: "/pricing",
    element: <Pricing />
  },
  {
    path: "/login",
    element: <Login />
  },

  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />
  // },
  // {
  //   path: "/reset-password",
  //   element: <ResetPassword />
  // },
  {
    path: "*",
    element: <Error />,
  },
]);

function Routers() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routers;



