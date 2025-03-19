import { ProjectDetails } from "../../elements/project-details/project-details";

export function AttendanceCounter() {
  return (
    <div>
      <ProjectDetails
        title="Attendance Counter"
        objective="To create a counting app for counting and reporting attendance."
        requirements={[
          "Must have a click counter.",
          "Must be able to store and organize each count.",
          "Must be able to graph counts over a period of time.",
        ]}
        description="
        Inspiration for this project came as I asked my local church clerk how I could make him a better click counter. 
        He gave me some ideas for how I could make something better than his current click counter.
        I created a click counter that was easy to count attendance with. 
        You could set the numeric intervals in which you wanted to increment or decrement by. 
        I used room database to store the counts locally. I made it so counts could be organized into books or a collection of counts.
        It was also easy to add historic data into the books. You could generate graphs or download .csv files to share the data with others via SMS or gmail.
        "
        stack="Java, Android studio"
        imageUrls={[""]}
        result="I completed all the requirements and the minimum viable product (MVP) for this was completed. I did not publish this on the store because my church ended up releasing a feature in their app specific for clerk use that had internal reporting built into it. Effectively making this project obsolete."
      ></ProjectDetails>
    </div>
  );
}
