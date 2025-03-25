import { Routes } from "../../main";
import "./not-found.css";

export function NotFound() {
  return (
    <div>
      <h1>Whatcha doing?</h1>
      <img className="nf-sloth-image" src={"assets/sloth.webp"} />
      <p className="not-found-text">
        The page you are looking for doesn't exist. This is your 404 not found
        error.
      </p>

      <a href={Routes.Home}>Go back to home page</a>
    </div>
  );
}
