import { ProjectDetails } from "../../elements/project-details/project-details";
export function OutboundDashboard() {
  return (
    <div>
      <ProjectDetails
        title="OUTBOUND DASHBOARD"
        situation="Prior to this project the outbound team was managing giant lists of outbound leads on hundreds of spreadsheets. The spreadsheet method worked but it was messy, chaotic, and required a lot of upfront training to add a new person to the team."
        action=" I coordinated with upper management, and the outbound department to understand all the requirements of the dashboard. ~ The goal was to make this dashboard easy and intuitive to use and eliminate the need for those massive spreadsheets. 
        ~Some of the requirements are:
        ~1. Be able to upload large spreadsheets of contacts per company and per campaign.
        ~2. Be able to assign which pod the outbound campaign is assigned to.
        ~3. Be able to manage and track call attempts and each attempt status.
        ~4. Be able to close out contacted leads and give an update on them.
        ~5. The UI should provide live updates to the call attempts.
        ~6. The dashboard should be intuitive and require little to no training to use.
        "
        result="The results of this project is an easy to use intuitive dashboard. Its easy to upload large spreadsheets of outbound leads into the dashboard, assign the number of call attempts required and manage those leads. 
        ~This effectively eliminated the need for hundreds of chaotic spreadsheets and allowed the outbound team members to quickly collaborate with live call attempt updates. This increased productivity, reduced mistakes, and reduced the amount of training needed for new hires.
        ~ Another feature that came along with this was integrating with Zapier. This made it so leads that came in through Zapier could be automatically added to this dashboard allowing representatives to call on leads within seconds of coming in. 
       "
        tools={[
          "Typescript",
          "Express.js",
          "Lit-Html",
          "Node.js",
          "HTML",
          "CSS",
          "PostgreSQL",
          "Graphql",
          "Prisma",
        ]}
        imageUrls={[
          {
            url: "outbound-dashboard.png",
            comments: "I have permission from the company to show this image.",
          },
        ]}
        assetFolderName="sms-chat-system/"
      ></ProjectDetails>
    </div>
  );
}
