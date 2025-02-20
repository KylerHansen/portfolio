import { useEffect, useState } from "react";
import * as React from "react";
import "./chat-bot.css";
import { MessageCircleQuestion, SendHorizontal, X } from "lucide-react";

export function ChatBot(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewMessage, setShowNewMessage] = useState(true);

  /**TODO: Probably want to store this in session storage instead. */
  const [messages, setMessages] = useState<
    Array<{
      user: "user" | "bot";
      body: string;
    }>
  >([
    {
      user: "bot",
      body: "Hello my name is Jarvis! I'm an AI bot trained on information about Kyler. Feel free to ask me a question!",
    },
    { user: "user", body: "What is Kyler's favorite color?" },
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [newMessage, setNewMessage] = useState("");

  if (!isOpen) {
    return (
      <div className="chat-widget">
        {showNewMessage ? <div className="new-message-bubble">1</div> : ""}
        <button
          className="closed-chat-bot"
          onClick={() => {
            setIsOpen(true);
            setShowNewMessage(false);
          }}
        >
          <MessageCircleQuestion size={32} />
        </button>
      </div>
    );
  } else {
    return (
      <div className="opened-chat-bot">
        <div className="chat-header">
          <button className="close-chat-bot" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
          <div className="chat-title">QUESTION?</div>
        </div>
        <div id="chat-messages">
          {messages.map((message) => {
            if (message.user === "user") {
              return <div className="user-message message">{message.body}</div>;
            } else {
              return <div className="bot-message message">{message.body}</div>;
            }
          })}
        </div>
        <div className="chat-sender">
          <input
            className="send-input"
            type="text-box"
            placeholder="Ask a question..."
            value={newMessage}
            onInput={(event) => {
              setNewMessage(event.currentTarget.value);
            }}
          />
          <div
            className="send-icon"
            onClick={() => {
              setMessages([...messages, { user: "user", body: newMessage }]);
              setNewMessage("");
              //use Gemini AI
              /*  fetch("https://hooks.zapier.com/hooks/catch/18368268/2wj35it/", {
                method: "POST",
                body: JSON.stringify({ message: newMessage }),
              }); */
              //TODO: Find a free API to use for this. Or link it to zapier to actually text me.
              //send new message to chatBot and populate response.
              //toggle new message state.
              //when bot replies call scrollToBottom();
            }}
          >
            <SendHorizontal size={32} />
          </div>
        </div>
      </div>
    );
  }
}

function scrollToBottom() {
  const messageElement = document.getElementById("chat-messages");
  if (!messageElement) {
    return;
  }
  messageElement.scrollTop = messageElement.scrollHeight;
}
