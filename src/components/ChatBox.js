import { useState } from "react";
import "./ChatBox.css";
import ChatMessage from "./ChatMessage";
import sendImage from "./images/send.png";
import UserBar from "./UserBar";

const ChatBox = (props) => {
  const [enteredMessage, setEnteredMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [placeholder, setPlaceholder] = useState(false);

  const messageHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setMessages((prevMessages) => [...prevMessages, enteredMessage]);
    setEnteredMessage("");
  };

  const placeholderChanger = placeholder ? "Write a message..." : "Aa";

  const handleBlur = () => {
    if (!enteredMessage) {
      setPlaceholder(false);
    }
  };

  return (
    <div className="form-bg">
      <UserBar />
      <div className="message-container">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            alignRight={index % 2 === 0} // Add conditional class for alignment
          />
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={enteredMessage}
          onChange={messageHandler}
          placeholder={placeholderChanger}
          onClick={() => setPlaceholder(true)}
          onBlur={handleBlur}
        ></input>
        {enteredMessage && (
          <button type="submit">
            <img src={sendImage} alt="Button" />
          </button>
        )}
      </form>
    </div>
  );
};

export default ChatBox;
