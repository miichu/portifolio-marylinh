import { createBrowserRouter } from "react-router-dom";
import Page from "./pages/Page";
import AboutMe from "./pages/aboutme/AboutMe";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import ErrorPage from "./components/error/errorPage";

export const router = createBrowserRouter([
  {
    path: "/portifolio-marylinh/",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        id: "home",
        path: "/portifolio-marylinh/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        id: "aboutme",
        path: "/portifolio-marylinh/about-me",
        element: <AboutMe />,
        errorElement: <ErrorPage />,
      },
      {
        id: "projects",
        path: "/portifolio-marylinh/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/portifolio-marylinh/projects/:projectId",
            element: <Projects />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);
