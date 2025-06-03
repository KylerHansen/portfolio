import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { Projects } from "./pages/projects/projects.page";
import { Interview } from "./pages/interview/interview.page";
import { ScavengerHuntEnding } from "./pages/scavenger-hunt-ending/scavenger-hunt-ending";
import { NotFound } from "./pages/not-found/not-found";
import { AttendanceCounter } from "./pages/projects/attendance-counter";
import { Routes } from "./routes";
import { SMSChatSystem } from "./pages/projects/sms-chat-system";
import { OutboundDashboard } from "./pages/projects/outbound-dashboard";
import { BiteHero } from "./pages/projects/bite-hero";

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
      { path: Routes.SMSChatSystem, element: <SMSChatSystem /> },
      { path: Routes.OutboundDashboard, element: <OutboundDashboard /> },
      { path: Routes.BiteHero, element: <BiteHero /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
