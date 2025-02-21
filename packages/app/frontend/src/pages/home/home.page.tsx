import { BicepsFlexed, HeartHandshake, Scale, Sprout } from "lucide-react";
import "./home.css";
import { useEffect, useState } from "react";
import springBanner from "../../assets/springBanner.png";
import summerBanner from "../../assets/summerBanner.png";
import fallBanner from "../../assets/fallBanner.png";

export function Home() {
  const [imageBanner, setImageUrl] = useState("");

  const seasonImages = {
    winter: summerBanner,
    spring: springBanner,
    summer: summerBanner,
    fall: fallBanner,
  };

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    setImageUrl(seasonImages[getSeason(currentMonth)]);
  }, []);

  const coreValues: ReadonlyArray<{
    icon: JSX.Element;
    title: string;
    description: string;
  }> = [
    {
      icon: <Scale color="var(--primary-color)" size={48} />,
      title: "WORK LIFE BALANCE",
      description:
        "I prioritize quality time with my wife and kids while maintaining my physical and spiritual well-being.",
    },
    {
      icon: <Sprout color="var(--primary-color)" size={48} />,
      title: "CONTINUOUS GROWTH",
      description:
        "I strive to improve in my career, personal life, and relationships, always seeking to be better.",
    },
    {
      icon: <HeartHandshake color="var(--primary-color)" size={48} />,
      title: "SERVICE & ACHIEVEMENT",
      description:
        "I find fulfillment in helping others and ensuring that I accomplish something meaningful every day.",
    },
    {
      icon: <BicepsFlexed color="var(--primary-color)" size={48} />,
      title: "INTEGRITY & AUTHENTICITY",
      description:
        "I strive to be honest, reliable, and true to my values in all aspects of life, both personally and professionally.",
    },
  ];

  return (
    <div className="home-page">
      <div
        className="banner"
        style={{ backgroundImage: `url(${imageBanner})` }}
      ></div>
      <div className="banner-text">
        <div className="title">KYLER HANSEN</div>
        <div className="subtitle">SOFTWARE DEVELOPER</div>
      </div>
      <div className="card">
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
          <h1>CORE VALUES</h1>
          <div className="core-values">
            {coreValues.map((value, index) => {
              return (
                <div className="core-value-container" key={index}>
                  {value.icon}
                  <div className="core-value-title">{value.title}</div>
                  <div className="core-value-description">
                    {value.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function getSeason(month: number): "winter" | "spring" | "summer" | "fall" {
  if (month === 0 || month === 11 || month === 1) {
    return "winter";
  } else if (month === 2 || month === 3 || month === 4) {
    return "spring";
  } else if (month === 5 || month === 6 || month === 7) {
    return "summer";
  } else {
    return "fall";
  }
}
