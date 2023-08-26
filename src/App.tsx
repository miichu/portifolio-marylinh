import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./pages/Page.tsx";
import ErrorPage from "./components/error/errorPage.tsx";
import AboutMe from "./pages/aboutme/AboutMe.tsx";
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/portifolio-marylinh/",
    element: <Page />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/portifolio-marylinh/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/portifolio-marylinh/about-me",
        element: <AboutMe />,
        errorElement: <ErrorPage />,
      },
      {
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
