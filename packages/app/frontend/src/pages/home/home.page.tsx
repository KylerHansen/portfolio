import "./home.css";
import { useState } from "react";
import { CoreValues } from "../../elements/core-values/core-values";

export function Home() {
  const [bannerClickCount, setClickCount] = useState<number>(0);

  return (
    <div className="home-page">
      <div
        onClick={() => {
          setClickCount(bannerClickCount + 1);
          if (bannerClickCount > 8) {
            alert("You found clue #2. Your next clue is hidden in the footer.");
            setClickCount(0);
          }
        }}
        className="banner"
        style={{ backgroundImage: `url("assets/summerBanner.png")` }}
      ></div>
      <div className="banner-text">
        <div className="title">KYLER HANSEN</div>
        <div className="subtitle">SOFTWARE DEVELOPER</div>
      </div>
      <div className="home-card">
        <div className="section">
          <h1>PURPOSE STATEMENT</h1>
          <div className="purpose-statement">
            I was created to use my talents of Execution, Imagination,
            Compassion, to perform my passions of Advocating, Leading,
            Analyzing, to accomplish my mission of Achievement by Producing Wins
            and Recognition.
          </div>
        </div>

        <div className="section">
          <h1>CLIFTON STRENGTHS</h1>
          <div className="clifton-strengths">
            <div
              onMouseOver={(event) => {
                event.currentTarget.innerText =
                  "Driven by a constant need for productivity and accomplishment, always striving to do more.";
              }}
              onMouseOut={(event) => {
                event.currentTarget.innerText = "Achiever";
              }}
              className="cs-card background-dark"
            >
              Achiever
            </div>
            <div
              onMouseOver={(event) => {
                event.currentTarget.innerText =
                  "Inspired by the future and what could be.";
              }}
              onMouseOut={(event) => {
                event.currentTarget.innerText = "Futuristic";
              }}
              className="cs-card secondary"
            >
              Futuristic
            </div>
            <div
              onMouseOver={(event) => {
                event.currentTarget.innerText =
                  "Committed to continuous growth, always seeking knowledge and improvement";
              }}
              onMouseOut={(event) => {
                event.currentTarget.innerText = "Learner";
              }}
              className="cs-card primary"
            >
              Learner
            </div>
            <div
              onMouseOver={(event) => {
                event.currentTarget.innerText =
                  "Thrives on structure, organization, and consistency to create efficiency.";
              }}
              onMouseOut={(event) => {
                event.currentTarget.innerText = "Discipline";
              }}
              className="cs-card accent"
            >
              Discipline
            </div>
            <div
              onMouseOver={(event) => {
                event.currentTarget.innerText =
                  "Guided by strong values and principles, I pursue life with defined purpose and direction.";
              }}
              onMouseOut={(event) => {
                event.currentTarget.innerText = "Belief";
              }}
              className="cs-card secondary-accent"
            >
              Belief
            </div>
          </div>
        </div>

        <div className="section">
          <CoreValues />
        </div>
      </div>
    </div>
  );
}
