import * as React from "react";
import "./project-details.css";

export function ProjectDetails({
  title,
  objective,
  description,
  requirements,
  stack,
  imageUrls,
  result,
}: {
  title: string;
  objective: string;
  description: string;
  stack: string;
  requirements: Array<string>;
  imageUrls: Array<string>;
  result: string;
}): React.ReactElement {
  const [imageIndex, setIndex] = React.useState(0);

  return (
    <div className="project-details-card">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="project-slide-show-container">
        <img
          className="project-image"
          /* TODO: GET SELECTED IMAGE URL */
          src={"../assets/" + imageUrls[imageIndex]}
          alt="Project Images"
        />
      </div>
      <div className="objective">
        <span className="project-detail-subtitle">OBJECTIVE:</span>
        {objective}
      </div>
      <div className="description">
        <span className="project-detail-subtitle">DESCRIPTION:</span>
        {description}
      </div>
      <div className="requirements">
        <span className="project-detail-subtitle">REQUIREMENTS:</span>
        {requirements}
      </div>
      {/* Bulleted list */}
      <div className="stack">
        <span className="project-detail-subtitle">TOOLS:</span>
        {stack}
      </div>
      <div className="result">
        <span className="project-detail-subtitle">RESULTS:</span>
        {result}
      </div>
    </div>
  );
}
