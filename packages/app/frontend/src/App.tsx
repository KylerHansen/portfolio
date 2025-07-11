import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Menu, MountainSnow, X } from "lucide-react";
import { useState } from "react";
import { ChatBot } from "./elements/chat-bot/chat-bot";
import { Routes } from "./routes";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="standard-nav">
        <Link to={Routes.Home}>HOME</Link>
        {" | "}
        <Link to={Routes.Projects}>PROJECTS</Link>
        {" | "}
        <Link to={Routes.Interview}>INTERVIEW</Link>
        {/*{" | "}
          <Link to={Routes.Blog}>BLOG</Link> */}
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
          <Link to={Routes.Interview} onClick={() => setIsOpen(false)}>
            INTERVIEW
          </Link>
          {/*<Link to={Routes.Blog} onClick={() => setIsOpen(false)}>
              BLOG
            </Link> */}
        </div>
      ) : (
        <></>
      )}
      <Outlet />
      <ChatBot />
      <footer>
        <p>© Copyright {new Date().getFullYear()}</p>
        <a href="https://www.linkedin.com/in/kyler-hansen-a365991a5">
          LinkedIn
        </a>
        <div className="clue-3">
          Congratulations you found clue #3! Lets play a game. Starting from
          left to right, click on each of the core value icons once to begin.
        </div>
      </footer>
    </>
  );
}

export default App;
