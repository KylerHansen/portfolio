import { ProjectDetails } from "../../elements/project-details/project-details";

export function AttendanceCounter() {
  return (
    <div>
      <ProjectDetails
        title="Attendance Counter"
        situation="Inspiration for this project came as I saw my local church clerk using an app to count ward attendance. I asked him how I could make him a better one. 
        He gave me some ideas for things he would like to see in a click counter."
        action="I created a click counter that was easier for him to count attendance with. You could easily set the numeric intervals in which you wanted to increment or decrement by. Each of the weekly attendance counts could be saved in various files such as 'Ward Attendance', 'Sunday School Attendance', etc. The user could select one or more of these folders to use in generating a graph. The graph and data could be shared via text, gmail, or csv."
        tools={["Java", "Android studio", "Eclipse", "RoomDB"]}
        imageUrls={[
          { url: "attendance.png", comments: "App Icon" },
          { url: "attendance_1.png" },
          {
            url: "attendance_2.png",
            comments:
              "Click counter page used to create an attendance count. In addition to button presses, you could click on the -6 to manually type in a number.",
          },
          {
            url: "attendance_3.png",
            comments:
              "Save the count into an existing book or create a new one. Books are collections of counts, for example a book to store weekly game night.",
          },
          {
            url: "attendance_4.png",
            comments: "View, sort, create, edit and delete books on this page.",
          },
          {
            url: "attendance_5.png",
            comments:
              "Editing a book allows you to increment each count or delete them. Top bar tools allow you to filter, sort, create counts and graph the book.",
          },
          {
            url: "attendance_6.png",
            comments:
              "Looking back now on this project, their is some UI improvements that could be made here. This page is were you can select all the settings to graph the list of counts over a period of time.",
          },
          {
            url: "attendance_7.png",
            comments:
              "Once a graph is generated, the top bar tools allow you to share the graph via SMS or export as a csv and email. ",
          },
        ]}
        additionalImagePath="attendance/"
        gitHubLink="https://github.com/KylerHansen/Attendance-Counter-Pro"
        result="I completed all the requirements and the minimum viable product (MVP) for this was completed. I learned more about how to utilize RoomDB, and Android permissions. I did not publish this on the store because my church ended up releasing a feature in their app specific for clerk use that had internal reporting built into it. Effectively making this project obsolete."
      ></ProjectDetails>
    </div>
  );
}
