import { useState } from "react";
import "./projects.css";
import { TreePine, X } from "lucide-react";
import { Routes } from "../../main";

export function Projects() {
  const [appliedFilters, setAppliedFilter] = useState<ProjectKeywords[]>([]);

  enum ProjectKeywords {
    Typescript = "Typescript",
    NodeJS = "NodeJS",
    Express = "Express",
    Twilio = "Twilio",
    Prisma = "Prisma",
    AWS = "AWS",
    Graphql = "Graphql",
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
    Postgres = "Postgres",
    Redis = "Redis",
    Monorepo = "Monorepo",
    Docker = "Docker",
  }

  const JillsOfficeStack = [
    ProjectKeywords.Typescript,
    ProjectKeywords.NodeJS,
    ProjectKeywords.Twilio,
    ProjectKeywords.Express,
    ProjectKeywords.AWS,
    ProjectKeywords.HTML,
    ProjectKeywords.CSS,
    ProjectKeywords.Work,
    ProjectKeywords.React,
    ProjectKeywords.LitHtml,
    ProjectKeywords.Graphql,
    ProjectKeywords.Prisma,
    ProjectKeywords.Postgres,
    ProjectKeywords.Redis,
    ProjectKeywords.Monorepo,
    ProjectKeywords.Docker,
  ];

  const projects: ReadonlyArray<{
    title: string;
    description: string;
    keywords: ProjectKeywords[];
    link?: Routes;
    image?: string;
  }> = [
    {
      title: "SMS & Chat Messaging",
      description:
        "Created a chat messaging system that allowed the call center users to respond to both website chat widgets and SMS messages for hundreds of companies.",
      keywords: JillsOfficeStack,
    },
    {
      title: "Outbound dashboard",
      description:
        "Created a dashboard for the outbound team. This turned hundreds of excel spreadsheets into one convenient easy to use dashboard.",
      keywords: JillsOfficeStack,
    },
    {
      title: "Call Dashboard Overhaul UX/UI",
      description:
        "Completely redesigned the call dashboard to improve the user experience, increase efficiency, and reduce employee mistakes.",
      keywords: JillsOfficeStack,
    },
    {
      title: "Attendance Counter",
      description:
        "This is a native android app I made for counting and graphing attendance.",
      image: "assets/attendance.png",
      link: Routes.AttendanceCounter,
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
      image: "assets/text-my-waiter-logo.png",
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
      image: "assets/mahjong.png",
      keywords: [ProjectKeywords.Java, ProjectKeywords.School],
    },
    {
      title: "Johari",
      description:
        "One of my full stack senior projects, a psychology test called Johari Window.",
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
        "Created a call center feature that allowed users to set a custom ringtone for their user account.",
      keywords: JillsOfficeStack,
    },
    {
      title: "Announcement Feature",
      description:
        "Created a way for executives to send out both internal and external announcements in their system.",
      keywords: JillsOfficeStack,
    },
    {
      title: "Billing Legacy Code Refactor",
      description:
        "I updated the legacy code to support billing for the chat system. I also changed the billing code to use Stripe usage based subscriptions for future scalability.",
      keywords: JillsOfficeStack,
    },
  ];

  return (
    <div className="project-page">
      <h1>PROJECTS</h1>
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
            <div
              className="project-card"
              key={index}
              onClick={() => {
                if (!project.link) return;

                window.location.href = project.link;
              }}
            >
              {project.image ? (
                <img className="project-image" src={project.image} />
              ) : (
                <TreePine size={80} />
              )}
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
