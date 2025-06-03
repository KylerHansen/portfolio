import * as React from "react";
import "./project-details.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectDetails({
  title,
  tools,
  situation,
  action,
  result,
  imageUrls,
  assetFolderName,
  projectLink,
}: {
  title: string;
  tools: Array<string>;
  situation: string;
  action: string;
  result: string;
  imageUrls: Array<{ url: string; comments?: string }>;
  assetFolderName?: string;
  projectLink?: string;
}): React.ReactElement {
  const [imageIndex, setIndex] = React.useState(0);

  const maxIndex = imageUrls.length - 1;

  enum GalleryDirection {
    Left = "Left",
    Right = "Right",
  }

  function navigateGallery(index: number, direction: GalleryDirection) {
    if (direction === GalleryDirection.Right) {
      const currentIndex = index + 1;
      setIndex(currentIndex > maxIndex ? 0 : currentIndex);
    } else {
      const currentIndex = index - 1;
      setIndex(currentIndex < 0 ? maxIndex : currentIndex);
    }
  }

  return (
    <div className="pd-card">
      <h1>{title.toUpperCase()}</h1>
      <div className="pd-gallery-container">
        {maxIndex < 1 ? (
          ""
        ) : (
          <div className="pd-gallery-arrow">
            <ChevronLeft
              size={40}
              onClick={() => {
                navigateGallery(imageIndex, GalleryDirection.Left);
              }}
            />
          </div>
        )}
        <div className="pd-image-container">
          <img
            className="pd-project-image"
            src={"../assets/" + assetFolderName + imageUrls[imageIndex]?.url}
            alt="Project Images"
          />
          <div className="pd-image-comments">
            {imageUrls[imageIndex]?.comments}
          </div>
        </div>
        {maxIndex < 1 ? (
          ""
        ) : (
          <div className="pd-gallery-arrow">
            <ChevronRight
              size={40}
              onClick={() => {
                navigateGallery(imageIndex, GalleryDirection.Right);
              }}
            />
          </div>
        )}
      </div>

      <div className="pd-layout">
        <div className="pd-column-tools">
          <h3 className="pd-subtitle">TOOLS:</h3>
          <div className="pd-tools">
            {tools.map((tool, index) => {
              return (
                <React.Fragment key={index}>
                  <li>{tool}</li>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="pd-subtitle">SITUATION:</h3>
          <div className="pd-paragraph">
            {situation.split("~").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <h3 className="pd-subtitle">ACTION:</h3>
          <div className="pd-paragraph">
            {action.split("~").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <h3 className="pd-subtitle">RESULT:</h3>
          <div className="pd-paragraph">
            {result.split("~").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <h3 className="pd-subtitle">PROJECT LINK:</h3>
          <div className="pd-gh-link">
            {projectLink ? (
              <a href={projectLink} target="_blank">
                {projectLink}
              </a>
            ) : (
              "Private repository."
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
