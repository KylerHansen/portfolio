import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Contact } from "./pages/contact.tsx";

export enum Routes {
  HOME = "/portfolio/",
  CONTACT = "/portfolio/contact",
}

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <App />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: Routes.CONTACT,
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
