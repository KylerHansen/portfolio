import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.page.tsx";
import { Blog } from "./pages/blog.page.tsx";
import { Games } from "./pages/games.page.tsx";
import { Websites } from "./pages/websites.page.tsx";
import { About } from "./pages/about.page.tsx";

/**
 * If updating this, also update App.tsx
 */
export enum Routes {
  Home = "/portfolio/",
  Blog = "/portfolio/blog",
  Games = "/portfolio/games",
  Websites = "/portfolio/demo-websites",
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
        path: Routes.Games,
        element: <Games />,
      },
      {
        path: Routes.Websites,
        element: <Websites />,
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
