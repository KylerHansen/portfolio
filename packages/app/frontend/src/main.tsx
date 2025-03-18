import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { Projects } from "./pages/projects/projects.page";
import { Interview } from "./pages/interview/interview.page";

/**
 * If updating this, also update App.tsx and service-worker.js
 */
export enum Routes {
  Home = "/portfolio/",
  Blog = "/portfolio/blog",
  Projects = "/portfolio/projects",
  Interview = "/portfolio/interview",
}

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,

    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
      /*  {
        path: Routes.Blog,
        element: <Blog />,
      }, */
      {
        path: Routes.Projects,
        element: <Projects />,
      },
      {
        path: Routes.Interview,
        element: <Interview />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
