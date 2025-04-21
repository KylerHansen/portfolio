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
        <div className="pd-gallery-arrow">
          <ChevronLeft
            size={40}
            onClick={() => {
              navigateGallery(imageIndex, GalleryDirection.Left);
            }}
          />
        </div>
        <div className="pd-image-container">
          <img
            className="pd-project-image"
            src={"../assets/" + additionalImagePath + imageUrls[imageIndex]}
            alt="Project Images"
          />
        </div>
        <div className="pd-gallery-arrow">
          <ChevronRight
            size={40}
            onClick={() => {
              navigateGallery(imageIndex, GalleryDirection.Right);
            }}
          />
        </div>
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
          <div className="pd-paragraph">{situation}</div>

          <h3 className="pd-subtitle">ACTION:</h3>
          <div className="pd-paragraph">{action}</div>

          <h3 className="pd-subtitle">RESULT:</h3>
          <div className="pd-paragraph">{result}</div>
        </div>
      </div>
    </div>
  );
}
