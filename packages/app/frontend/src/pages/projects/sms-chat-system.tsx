import { ProjectDetails } from "../../elements/project-details/project-details";

export function SMSChatSystem() {
  return (
    <div>
      <ProjectDetails
        title="SMS & CHAT MESSAGING"
        situation="When I first started at Jill's Office they only took inbound and outbound phone calls. I had the opportunity to build for them, a complete Chat and SMS messaging system."
        action="
        I did a ton of research into utilizing Twilio's API in order to build out the SMS components of the system. 
        With the knowledge I gained, I was able to set up the Twilio APIs and build the system in such a way that it conformed to Twilio's policies and SMS compliancy such as 10 DLC A2P. ~
        I leveraged Twilio's conversation services and created backend endpoints on our system for Twilio to hit during specific events. ~
        One of the major challenges I faced was ensuring our AWS hosted database stayed up to date and in sync with Twilio conversation services. I overcame this challenge by creating a bash script to fetch data from Twilio and check for any out of sync SMS conversations.
        ~This proved successful and one benefit that came from this script is that I was able to use Twilio as a back up. Meaning if we had any down time and a customer sent us a text message during the down time we had a way to recover those text message when we were up and running again.
        "
        tools={[
          "Typescript",
          "Express.js",
          "Twilio API",
          "React",
          "Lit-Html",
          "Node.js",
          "RESTful API",
          "HTML",
          "CSS",
          "PostgreSQL",
          "Graphql",
          "Prisma",
        ]}
        imageUrls={[
          {
            url: "flow-chart.png",
            comments:
              "This is just one of the many flow charts and designs I made to internally document how everything works. This particular one demonstrates the difference between production flow and development environment flows for binding phone numbers to conversation services. I got permission from the company to show these images on my portfolio some items have been hidden.",
          },
          {
            url: "chat-widget-customize.png",
            comments:
              "This is one of my favorite UI components that I made. This is a screen that is accessible by the company owners or the customer development team. This allows the companies to customize their chat widget. They can change the titles, fonts, and colors, and add automatic customized messages. On the right is a live preview of their customized changes. Lastly after saving they can copy a script tag and past it onto their company website. Once added, any further saved changes will be automatically applied to the companies chat widget.",
          },
          {
            url: "chat-start.png",
            comments:
              "Here is an example of a chat widget on a company website. To start the chat you have to provide your name and phone number.",
          },
          {
            url: "chat-progress.png",
            comments:
              "Once started the customized auto messages get populated into the widget. At the same time the chat gets sent over to the chat queue. Onces a representative assigns it to themselves, they will get notified that they have been connected to the agent.",
          },
          {
            url: "chat-queue.png",
            comments:
              "This is the perspective of the representative, on the left you can see there are no chats in the queue and one chat has been assigned to the agent. Hidden on this page is information about the customer and tools that aid in assisting the customer. The agent can have multiple chats assigned the them. Chats could be coming from customers who texted the company phone number, or customers using the company website chat widget.",
          },
        ]}
        assetFolderName="sms-chat-system/"
        result="The results of this project are an estimated 287% increase in productivity. Profitability was increased in several ways. ~1. Top line profitability increased by creating a new marketable product. ~2. Bottom line profitability increased by increasing representatives productivity. This chat system allowed the representatives to handle 3-5 customers at a time instead of just 1. ~3. These new features also laid the ground work for other new products such as hot lead texting, and call queue tree messaging. ~Lastly I learned so much about Twilio that I became the companies go to 'Twilio Expert'. I was able to help, correct mistakes in other departments, monitor thousands of active company numbers to ensure SMS compliancy was followed, and lastly I was able to identify and propose a solution to a large architectural ticking time bomb that existed in the legacy infrastructure. The results of my work in this area led to my promotion to Senior Software Engineer I."
      ></ProjectDetails>
    </div>
  );
}
