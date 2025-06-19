import { useEffect, useState } from "react";
import "./interview.css";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Interview() {
  const [openedQuestions, setOpenedQuestions] = useState<Array<number>>([]);

  useEffect(() => {
    console.log("openedQuestions", openedQuestions);
  }, [openedQuestions]);

  const interviewQuestions: ReadonlyArray<{
    question: string;
    answer: string;
  }> = [
    {
      question: "What is your experience at Jill's Office?",
      answer:
        "At Jill’s Office, I created the website chat & SMS system, which connects customers from hundreds of companies to live representatives. I built the chat widget, sms queue system, and Twilio API integrations, ensuring compliance with A2P 10DLC regulations. I also improved billing by integrating Stripe’s usage-based subscriptions, simplifying future pricing changes. Additionally, I developed an outbound call dashboard, redesigned the call screen to reduce errors, and created internal tools like custom ringtones and an announcement system to enhance efficiency and morale. My work there increased scalability, streamlined operations, increased profitability, and improved customer communications.",
    },
    {
      question: "Why do you like software engineering?",
      answer:
        "I love to build stuff and the chance to be creative, and programming is just one of the many mediums I can use to bring ideas to life. I also enjoy puzzles and the sense of accomplishment I get from solving problems. Each of these naturally play a role in programming.",
    },
    {
      question: "What are you looking for in your next role?",
      answer:
        "I’m looking for something that can provide opportunities for me to grow and expand my skills as a developer, a place that supports a healthy work-life balance and has good team dynamics and culture. ",
    },
    {
      question:
        "Can you describe a time when you had to solve a difficult technical problem?",
      answer:
        "One of the most recent challenges that comes to mind is when I was working on integrating with Stripe. It was decided to change our billing structure to be more dependent on Stripe and utilize their usage-based billing system with meter events. This change aimed to increase profitability and reduce the amount of code we needed to maintain in the future. At the time, our billing code was difficult to modify and maintain. I was responsible for implementing this transition to rely on Stripe. However, throughout the process, I encountered issue after issue. Both Stripe and our existing billing system were designed for very specific purposes, leaving little room for compatibility. It felt like every time I attempted a solution, I ran into a new roadblock, whether due to API limitations or constraints within our company's internal processes. To navigate these challenges, I pored over the Stripe API documentation, searching for workarounds to the roadblocks I encountered. When the documentation fell short, I reached out to the Stripe developers on their Discord channel to inquire about possible solutions. Some issues didn’t have an obvious best solution, as different approaches had distinct trade-offs, and the decision depended on the company's priorities. In these cases, I followed our team’s process by creating an architecture discussion, presenting all possible solutions, explaining which ones were unfeasible, and outlining the two viable options, highlighting their trade-offs. This led to productive discussions, and I even collaborated with other departments to ensure that the chosen solution was the best course of action. I ultimately was able to overcome all the limitations and roadblocks, implementing features that made both our billing system and processes compatible with Stripe’s usage-based billing.",
    },
    {
      question: "What is your approach for finding the root cause of a bug?",
      answer:
        "My first step when debugging is attempting to recreate the problem. If I can reproduce it, I usually gain a good understanding of the possible causes. Next, I break down the logic into steps, which can take two forms. One approach I use is adding logs, starting where I suspect the issue is and then working my way outward. I have found this method particularly effective, especially when I have little context about the root cause of the bug. The other way I break down the logic is by writing unit tests. Often, when a bug exists, it’s due to an edge case that was missed in the tests. Reviewing those tests or recreating the issue as a test case is also very effective in identifying the bug and eliminating false assumptions.",
    },
    {
      question: "How would you address technical debt?",
      answer:
        "In my opinion, there needs to be a balance between addressing technical debt and working on new features. This balance depends on the company's objectives and priorities. Some technical debt can be a waste of time and money, while other technical debt, if fixed, could significantly improve maintainability and team productivity. I would create a document and a scoring system so, as a team, we could determine which technical debt items were money pits, which were quick wins (low-effort code changes with big impact), and which could be addressed incrementally. I generally try to leave the code better than I found it while staying focused on my current tasks to avoid delaying the release of the new feature.",
    },
    {
      question: "What do you think makes code readable and maintainable?",
      answer:
        "I think, firstly, choosing good functions and variable names helps a lot. I also believe that following the DRY principle significantly improves maintainability and readability. I used to think that extracting everything into small functions would always enhance readability and maintainability, but I found that, when overdone, it can lead to unnecessary functions and hard-to-follow code. I now strive to be more strategic when extracting logic into functions.",
    },
    {
      question: "What do you do to grow on a regular basis?",
      answer:
        "I think current research is an important part of growth. I spend a good amount of time researching various topics and I also enjoy watching YouTube channels that discuss programming strategies, principles, and new technologies. Additionally, I seek out free courses or training programs on subjects I want to learn and work through them. One example of this is with Twilio, which was relevant to projects I was working on at the time. I completed over 10 different training courses they offered. I also occasionally do CodeWars, one of those coding challenge websites. Lastly, I have some passion projects that I work on periodically. You can see my projects in the projects page of this website.",
    },
    {
      question: "What are your hobbies?",
      answer:
        "I have many hobbies, if the theme of this website didn't already give it away. I love camping and being in the mountains. I also enjoy riding my motorcycle, playing video games, target shooting, watching movies, and 3d printing.",
    },
    {
      question: "How would you describe your personality?",
      answer:
        "I'm introverted, meaning I'm generally reserved and quiet. However, I enjoy getting to know people through sincere, deeper conversations. Most people would say they've never heard me raise my voice even on roller coasters or at sporting events. I once scored as an ISFJ on the Myers-Briggs personality test, though one of the categories was a 50/50 split, so my result could shift by one letter if I took it again—but I don’t remember which one. ",
    },
    {
      question: "What is a fun fact about you?",
      answer:
        "I've been sky diving twice, and would definitely go again. I also want to go bungee jumping but haven't been yet.",
    },
    {
      question: "Do you like scavenger hunts?",
      answer: "Go to the home page and click the banner 10 times.",
    },
  ];

  return (
    <div className="interview-page">
      <h1>INTERVIEW ME </h1>
      <p>
        This is a collection of common interview questions and my answers, for
        you to get to know me better.
      </p>
      <div className="interview-questions">
        {interviewQuestions.map((prompt, index) => {
          return (
            <div key={index}>
              <div
                className="question-container"
                onClick={() => {
                  setOpenedQuestions(
                    openedQuestions.includes(index)
                      ? openedQuestions.filter((item) => item != index)
                      : [...openedQuestions, index]
                  );
                }}
              >
                <div className="question">{prompt.question}</div>
                <div className="drop-icon">
                  {openedQuestions.includes(index) ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </div>
              </div>
              <div
                className={
                  openedQuestions.includes(index) ? `answer open` : `answer`
                }
              >
                <p>{prompt.answer} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
