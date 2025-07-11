import { ProjectDetails } from "../../elements/project-details/project-details";
export function DigitalClueSheet() {
  return (
    <div>
      <ProjectDetails
        title="Digital Clue Sheet"
        situation="I wanted to learn Vue.js and came up with the idea for this project while playing Clue with my family.
         I wanted to make it easier and faster to keep track of the clues given to me during the game."
        action="
          I started going through some Vue.js tutorials. 
          I would pause whenever I learned something useful and then apply it to my project. 
          My initial impression of Vue.js is that I like it. 
          I enjoy some of the built-in features such as using 'v-if', 'v-for', and 'v-bind'. 
          I also like that you can simply use the 'scoped' keyword to make the styling specific to the component.
        "
        result="
           I learned more about Vue.js and created a basic clue sheet to help me play Clue. 
           At the time of writing this, I have not yet decided whether I will publish it on the Play Store.
       "
        tools={["Typescript", "Vue.js", "Vite", "Node.js", "HTML", "CSS"]}
        imageUrls={[
          {
            url: "dcs-icon.png",
          },
          {
            url: "dcs1.png",
          },
          {
            url: "dcs2.png",
          },
          {
            url: "dcs3.png",
            comments:
              "One challenge I faced with this project was that each game could have anywhere from three to six players, and not all players are guaranteed to have the same number of cards. In this version, you can select the cards you have, which will automatically eliminate them from the possibilities.",
          },
          {
            url: "dcs4.png",
            comments:
              "If the card split is not even, the 'Cards Remaining' section will show a number greater than zero to indicate the extra cards. You can then assign those additional cards to the appropriate players. In this case, the split is even.",
          },
          {
            url: "dcs5.png",
            comments:
              "I tried to pack a lot of information in here. I have learned that this is not intuitive to other people, so I will need to improve it or add instructions. As of now, 'X' means the player does not have the card, 'Check' means the player has the card, and '-' means we do not know. Underneath each name, it shows how many cards remain for that player. You can see that I have 0 cards remaining, and you can also see which of my 3 cards have been eliminated from the board.",
          },
          {
            url: "dcs6.png",
            comments:
              "As you eliminate cards and gather more information, a winning card may be discovered. This is indicated, as shown on the suspect 'Peacock'. Also note that some spaces are filled in with the number '1'. This indicates which players might have that card. Each time a player is a possible match, the number increases. The higher the number, the more likely that player is to have the card in their hand. There are probably better strategies out there, but this is tailored to how I like to play Clue.",
          },
          {
            url: "dcs7.png",
          },
          {
            url: "dcs8.png",
            comments:
              "Clicking on a player's name shows the history of accusations that player has made. This can help narrow down certain cards when players include their own cards in their accusations.",
          },
        ]}
        assetFolderName="digital-clue-sheet/"
      ></ProjectDetails>
    </div>
  );
}
