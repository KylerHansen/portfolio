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
  return (
    <div>
      <div className="title">{title}</div>
      <div className="objective">{objective}</div>
      <div className="description">{description}</div>
      <div className="requirements">{requirements}</div> {/* Bulleted list */}
      <div className="stack">{stack}</div>
      <div className="url">{imageUrls}</div> {/* Gallery */}
      <div className="result">{result}</div>
    </div>
  );
}
