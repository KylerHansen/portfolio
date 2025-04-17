import * as React from "react";
import "./project-details.css";

export function ProjectDetails({
  title,
  tools,
  situation,
  action,
  result,
  imageUrls,
  additionalImagePath,
}: {
  title: string;
  tools: Array<string>;
  situation: string;
  action: string;
  result: string;
  imageUrls: Array<string>;
  additionalImagePath?: string;
}): React.ReactElement {
  const [imageIndex, setIndex] = React.useState(0);

  return (
    <div className="project-details-card">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="project-slide-show-container">
        <img
          className="project-image"
          /* TODO: GET SELECTED IMAGE URL */
          src={"../assets/" + additionalImagePath + imageUrls[imageIndex]}
          alt="Project Images"
        />
      </div>

      <h3 className="project-detail-subtitle">TOOLS:</h3>
      <div className="tools">
        {tools.map((tool, index) => {
          return (
            <React.Fragment key={index}>
              <li>{tool}</li>
            </React.Fragment>
          );
        })}
      </div>

      <h3 className="project-detail-subtitle">SITUATION:</h3>
      <div className="pd-paragraph">{situation}</div>

      <h3 className="project-detail-subtitle">ACTION:</h3>
      <div className="pd-paragraph">{action}</div>

      <h3 className="project-detail-subtitle">RESULT:</h3>
      <div className="pd-paragraph">{result}</div>
    </div>
  );
}
