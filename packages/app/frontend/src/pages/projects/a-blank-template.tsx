import { ProjectDetails } from "../../elements/project-details/project-details";
export function ProjectName() {
  return (
    <div>
      <ProjectDetails
        title="Project Name"
        situation=""
        action="
        "
        result="
       "
        tools={["Typescript", "Vue.js", "Vite", "Node.js", "HTML", "CSS"]}
        assetFolderName="bite-hero/"
        imageUrls={[
          {
            url: "dcs-icon.png",
          },
          {
            url: "dcs1.png",
            comments: "",
          },
        ]}
      ></ProjectDetails>
    </div>
  );
}
