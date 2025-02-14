import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Routes } from "./main";

function App() {
  return (
    <>
      <nav>
        <Link to={Routes.Home}>HOME</Link>
        {" | "}
        <Link to={Routes.Games}>GAMES</Link>
        {" | "}
        <Link to={Routes.Blog}>BLOG</Link>
        {" | "}
        <Link to={Routes.Websites}>WEBSITES</Link>
        {" | "}
        <Link to={Routes.About}>ABOUT</Link>
      </nav>

      <Outlet />

      <footer>
        <p>© Copyright {new Date().getFullYear()}</p>
        <a href="www.linkedin.com/in/kyler-hansen-a365991a5">LinkedIn</a>
      </footer>
    </>
  );
}

export default App;
