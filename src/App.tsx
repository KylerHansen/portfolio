import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Routes } from "./main";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Coming Soon</h1>

      <nav>
        <Link to={Routes.HOME}>Home</Link>
        {" | "}
        <Link to={Routes.CONTACT}>Contact</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
