import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message, alignRight }) => {
  return (
    <div className={`chat-message ${alignRight ? "right" : "left"}`}>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
