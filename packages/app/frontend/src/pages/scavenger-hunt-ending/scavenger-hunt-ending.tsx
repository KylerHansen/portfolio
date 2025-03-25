import "./scavenger-hunt-ending.css";

export function ScavengerHuntEnding() {
  const namesList: Array<string> = ["Kyler", "Lex"];

  return (
    <div className="ending-page">
      <img className="se-sloth-image" src={"assets/sloth.webp"} />
      <h1>Congratulations!</h1>

      <div className="ending-statement">
        You made it to the end of the scavenger hunt! If you came here by
        accident, you can start the scavenger hunt by going to the interview
        page. Message me on LinkedIn letting me know you made it to the end and
        I will add your name to this list.
      </div>

      <div className="name-list">
        <ol>
          {namesList.map((name) => {
            return <li>{name}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
