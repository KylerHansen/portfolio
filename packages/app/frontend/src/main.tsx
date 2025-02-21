import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.page.tsx";
import { Blog } from "./pages/blog.page.tsx";
import { Projects } from "./pages/projects/projects.page.tsx";
import { About } from "./pages/about.page.tsx";

/**
 * If updating this, also update App.tsx
 */
export enum Routes {
  Home = "/portfolio/",
  Blog = "/portfolio/blog",
  Projects = "/portfolio/projects",
  About = "/portfolio/about",
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
      {
        path: Routes.Blog,
        element: <Blog />,
      },
      {
        path: Routes.Projects,
        element: <Projects />,
      },
      {
        path: Routes.About,
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
