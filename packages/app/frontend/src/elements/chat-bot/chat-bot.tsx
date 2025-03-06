import { useEffect, useState } from "react";
import * as React from "react";
import "./chat-bot.css";
import { MessageCircleQuestion, SendHorizontal, X } from "lucide-react";
import { AskJarvisResponse } from "@portfolio/common/src/shared-endpoints";

export function ChatBot(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [messageInput, setMessageInput] = useState("");

  /**TODO: Probably want to store this in session storage instead. */
  const [messages, setMessages] = useState<
    Array<{
      user: "user" | "bot";
      body: string;
    }>
  >([
    {
      user: "bot",
      body: "Hello my name is Jarvis! I'm an AI ready to answer information about Kyler. Feel free to ask me a question, like what is Kyler's work experience.",
    },
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen) {
    return (
      <div className="chat-widget">
        {newMessage ? <div className="new-message-bubble">1</div> : ""}
        <button
          className="closed-chat-bot"
          onClick={() => {
            setIsOpen(true);
            setNewMessage("");
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
          {messages.map((message, index) => {
            if (message.user === "user") {
              return (
                <div className="user-message message" key={index}>
                  {message.body}
                </div>
              );
            } else {
              return (
                <div className="bot-message message" key={index}>
                  {message.body}
                </div>
              );
            }
          })}
        </div>
        <div className="chat-sender">
          <input
            className="send-input"
            type="text-box"
            placeholder="Ask a question..."
            value={messageInput}
            onInput={(event) => {
              setMessageInput(event.currentTarget.value);
            }}
          />
          <div
            className="send-icon"
            onClick={async () => {
              setMessageInput("");
              const response = await askJarvis(messageInput);
              setMessages([
                ...messages,
                { user: "user", body: messageInput },
                {
                  user: "bot",
                  body: response,
                },
              ]);

              setNewMessage(response);
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

async function askJarvis(message: string) {
  const response = await fetch(import.meta.env.VITE_API_URL + "/askJarvis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: message }),
  });

  if (!response.ok) {
    throw new Error(`response ${response.status}`);
  }

  const data: AskJarvisResponse = await response.json();

  const responseBody = response.ok ? data.message : undefined;

  return responseBody
    ? responseBody
    : "I'm sorry I cannot process your message at this time. Try again later.";
}
