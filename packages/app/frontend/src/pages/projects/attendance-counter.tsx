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
          "attendance.png",
          "attendance_1.png",
          "attendance_2.png",
          "attendance_3.png",
          "attendance_4.png",
          "attendance_5.png",
          "attendance_6.png",
          "attendance_7.png",
        ]}
        additionalImagePath="attendance/"
        result="I completed all the requirements and the minimum viable product (MVP) for this was completed. I did not publish this on the store because my church ended up releasing a feature in their app specific for clerk use that had internal reporting built into it. Effectively making this project obsolete."
      ></ProjectDetails>
    </div>
  );
}
