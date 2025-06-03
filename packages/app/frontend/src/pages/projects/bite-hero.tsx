import { ProjectDetails } from "../../elements/project-details/project-details";
export function BiteHero() {
  return (
    <div>
      <ProjectDetails
        title="Bite Hero"
        projectLink="https://play.google.com/store/apps/details?id=app.netlify.bitehero.twa&utm_source=na_Med"
        situation="Inspiration for this project came to me as I was trying to get my 3 year old to eat dinner. What worked was playing a game with him where we would say 'once you take 3 more bites you can have a sip of juice'. Then we would hold up our hands and count out the bites. This is when the aha moment came that an app would be a great tool in this situation."
        action="
            I took the games that we were already playing with my child and automated it with an app. 
            ~This project was a good opportunity for me to explore progressive web apps further. PWA's are something that I've been wanting to learn more about. Could I really make an app that can run on both IOS and Android devices with just using Typescript? This was a great chance to find out the true limits of PWA's.
        "
        result="
            The more you learn the more you realize how much you don't know. I learned a lot from this project. I learned how to set up a PWA and utilize PWA builder for publishing in the app store.
            ~Some of the challenges I faced was getting the app to be responsive for IOS devices. This challenge led me to learn new methods for testing PWA's for IOS devices on windows computers. I also learned more about how caching works on PWA's to support offline modes. This has been a fun project and has helped get our kids to eat dinner better.
       "
        tools={["Typescript", "React", "Vite", "Node.js", "HTML", "CSS"]}
        imageUrls={[
          {
            url: "bite-hero-icon.png",
          },
          {
            url: "bh1.png",
            comments:
              "These images are likely to become outdated very quickly.",
          },
          {
            url: "bh2.png",
            comments:
              "This is the bite counter set up page. It allows you to select the image category and the number of bites per image.",
          },
          {
            url: "bh3.png",
            comments:
              "Once an image is selected and the child takes a bite you can press the 'Chomp!' button to reveal part of the image. Once the image is fully displayed a sound plays with a little animation.",
          },
          {
            url: "bh4.png",
            comments:
              "This is the story mode, it reads a story to you. One the button is pressed it turns the page and continues the story.",
          },
        ]}
        assetFolderName="bite-hero/"
      ></ProjectDetails>
    </div>
  );
}
