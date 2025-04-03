import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { Projects } from "./pages/projects/projects.page";
import { Interview } from "./pages/interview/interview.page";
import { ScavengerHuntEnding } from "./pages/scavenger-hunt-ending/scavenger-hunt-ending";
import { NotFound } from "./pages/not-found/not-found";
import { AttendanceCounter } from "./pages/projects/attendance-counter";

/**
 * If updating this, also update App.tsx and service-worker.js
 */
export enum Routes {
  Home = "/portfolio/",
  Blog = "/portfolio/blog",
  Projects = "/portfolio/projects",
  Interview = "/portfolio/interview",
  ScavengerHuntEnding = "/portfolio/4txzaq2l3i4y5vb",
  AttendanceCounter = "/portfolio/projects/attendance-counter",
}

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
    errorElement: <NotFound />,
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
      { path: Routes.ScavengerHuntEnding, element: <ScavengerHuntEnding /> },
      { path: Routes.AttendanceCounter, element: <AttendanceCounter /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
