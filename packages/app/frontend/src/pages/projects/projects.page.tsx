import { useState } from "react";
import "./projects.css";
import { X } from "lucide-react";
import attendance from "../../assets/attendance.png";
import mahjong from "../../assets/mahjong.png";
import textMyWaiter from "../../assets/text-my-waiter-logo.png";
import defaultCodingPic from "../../assets/coding.jpg";

export function Projects() {
  const [appliedFilters, setAppliedFilter] = useState<ProjectKeywords[]>([]);

  enum ProjectKeywords {
    Typescript = "Typescript",
    Twilio = "Twilio",
    AWS = "AWS",
    HTML = "HTML",
    CSS = "CSS",
    React = "React",
    Flutter = "Flutter",
    Firebase = "Firebase",
    Javascript = "Javascript",
    Dart = "Dart",
    Csharp = "C#",
    Asp = "ASP.NET Core",
    Android = "Native Android",
    Java = "Java",
    Personal = "Personal Projects",
    Work = "Work Projects",
    School = "School Projects",
    LitHtml = "Lit-Html",
  }

  const projects: ReadonlyArray<{
    title: string;
    description: string;
    image: string;
    keywords: ProjectKeywords[];
  }> = [
    {
      title: "Attendance Counter",
      description:
        "This is a native android app I made for counting and graphing attendance.",
      image: attendance,
      keywords: [
        ProjectKeywords.Java,
        ProjectKeywords.Android,
        ProjectKeywords.Personal,
      ],
    },
    {
      title: "Text My Waiter",
      description:
        "I created this mobile app as a way for customers to text their waiter.",
      image: textMyWaiter,
      keywords: [
        ProjectKeywords.React,
        ProjectKeywords.Firebase,
        ProjectKeywords.Flutter,
        ProjectKeywords.Dart,
        ProjectKeywords.Personal,
      ],
    },
    {
      title: "Mahjong",
      description: "This is a game I made as part of a java class project.",
      image: mahjong,
      keywords: [ProjectKeywords.Java, ProjectKeywords.School],
    },
    {
      title: "Johari",
      description:
        "One of my full stack senior projects, a psychology test called Johari Window.",
      image: defaultCodingPic,
      keywords: [
        ProjectKeywords.Asp,
        ProjectKeywords.Csharp,
        ProjectKeywords.Javascript,
        ProjectKeywords.School,
        ProjectKeywords.HTML,
        ProjectKeywords.CSS,
      ],
    },
    {
      title: "Custom Ringtone",
      description:
        "Created a call center feature that allowed users to set a custom ringtone for their user account. This improved employee morale and was my hack-athon project",
      image: defaultCodingPic,
      keywords: [
        ProjectKeywords.Typescript,
        ProjectKeywords.Twilio,
        ProjectKeywords.AWS,
        ProjectKeywords.HTML,
        ProjectKeywords.CSS,
        ProjectKeywords.Work,
        ProjectKeywords.LitHtml,
      ],
    },
    {
      title: "SMS Chat Messaging",
      description:
        "Created a chat messaging feature that allowed the call center users to respond to both website chat widgets and SMS messages for hundreds of companies.",
      image: defaultCodingPic,
      keywords: [
        ProjectKeywords.Typescript,
        ProjectKeywords.Twilio,
        ProjectKeywords.AWS,
        ProjectKeywords.HTML,
        ProjectKeywords.CSS,
        ProjectKeywords.Work,
        ProjectKeywords.React,
        ProjectKeywords.LitHtml,
      ],
    },
    {
      title: "Call Dashboard Overhaul UX/UI",
      description:
        "Completely redesigned the call dashboard to improve the user experience, increase efficiency, and reduce employee mistakes.",
      image: defaultCodingPic,
      keywords: [
        ProjectKeywords.Typescript,
        ProjectKeywords.HTML,
        ProjectKeywords.CSS,
        ProjectKeywords.Work,
        ProjectKeywords.React,
        ProjectKeywords.LitHtml,
      ],
    },
  ];

  return (
    <div className="project-page">
      <h1>Projects</h1>
      <div className="filters">
        {Object.values(ProjectKeywords).map((filter, index) => {
          if (appliedFilters.includes(filter)) {
            return (
              <button
                key={index}
                className="active"
                onClick={() => {
                  setAppliedFilter(
                    appliedFilters.filter(
                      (appliedFilter) => appliedFilter !== filter
                    )
                  );
                }}
              >
                <X className="close-filter-icon" size={10} /> {filter}
              </button>
            );
          } else {
            return (
              <button
                key={index}
                className="inactive"
                onClick={() => {
                  setAppliedFilter([...appliedFilters, filter]);
                }}
              >
                {filter}
              </button>
            );
          }
        })}
      </div>

      <div className="project-list">
        {projects
          .filter((project) => {
            return (
              appliedFilters.length === 0 ||
              project.keywords.some((keyword) =>
                appliedFilters.includes(keyword)
              )
            );
          })
          .map((project, index) => (
            <div className="project-card" key={index}>
              <img className="project-image" src={project.image} />
              <div className="project-title">
                {project.title.toLocaleUpperCase()}
              </div>
              <div className="project-description">{project.description}</div>
              <div className="project-keywords">
                {project.keywords.join(", ")}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
