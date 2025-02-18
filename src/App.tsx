import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Routes } from "./main";
import { Menu, MountainSnow, X } from "lucide-react";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="standard-nav">
        <Link to={Routes.Home}>HOME</Link>
        {" | "}
        <Link to={Routes.Projects}>PROJECTS</Link>
        {" | "}
        <Link to={Routes.Blog}>BLOG</Link>
        {" | "}
        <Link to={Routes.About}>ABOUT</Link>
      </nav>

      {!isOpen ? (
        <nav className="mobile-menu-icon">
          <MountainSnow />
          <Menu
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </nav>
      ) : (
        <nav className="mobile-menu-icon">
          <MountainSnow />
          <X className="close-mobile-nav" onClick={() => setIsOpen(false)} />
        </nav>
      )}

      {isOpen ? (
        <div className="mobile-nav">
          <Link to={Routes.Home} onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to={Routes.Projects} onClick={() => setIsOpen(false)}>
            PROJECTS
          </Link>
          <Link to={Routes.Blog} onClick={() => setIsOpen(false)}>
            BLOG
          </Link>
          <Link to={Routes.About} onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
        </div>
      ) : (
        <></>
      )}

      <Outlet />

      <footer>
        <p>© Copyright {new Date().getFullYear()}</p>
        <a href="https://www.linkedin.com/in/kyler-hansen-a365991a5">
          LinkedIn
        </a>
      </footer>
    </>
  );
}

export default App;
