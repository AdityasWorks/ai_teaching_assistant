import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
import { formatMessage } from "../utils/Formatters";

const Main = () => {
  const {
    onSent,
    showResults,
    loading,
    resultData,
    setInput,
    input,
    chatHistory,
    isNewChat,
  } = useContext(Context);

  const [leetCodeURL, setLeetCodeURL] = useState("");

  //if anyone is seening the bug is fixed
  

  const handleSend = () => {
    onSent(input, leetCodeURL);
    if (isNewChat) setLeetCodeURL(""); 
  };

  return (
    <div className="main">
      <div className="nav">
        <p>AI Teaching Assistant</p>
        <div className="nav-buttons">
          <img src={assets.user_icon} alt="User" className="usericon" />
        </div>
      </div>
      <div className="main-container">
        {!showResults ? (
          <div className="greet">
            <p>
              <span>Hello, Scaler</span>
            </p>
            <p>I'm your AI teaching assistant. How can I help you learn today?</p>
          </div>
        ) : (
          <div className="conversation-container">
            {chatHistory.map((message, index) => (
              <div key={index} className={`message-wrapper ${message.role}`}>
                <div className={`message ${message.role === "user" ? "user-message" : "ai-message"}`}>
                  <div className="message-title">
                    <img src={message.role === "user" ? assets.user_icon : assets.gemini_icon} alt="" />
                    <p>{message.role === "user" ? message.content : ""}</p>
                  </div>
                  <div className="message-content">
                    {message.role === "model" ? (
                      formatMessage(message.content)
                    ) : null}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="message-wrapper ai">
                <div className="message ai-message">
                  <div className="message-title">
                    <img src={assets.gemini_icon} alt="" />
                  </div>
                  <div className="message-content">
                    <div className="loader">
                      <hr />
                      <hr />
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask me about a DSA concept or programming challenge..."
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <input
              onChange={(e) => setLeetCodeURL(e.target.value)}
              value={leetCodeURL}
              type="text"
              placeholder="Paste LeetCode problem link (optional)"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <div className="input-group">
              <img src={assets.send_icon} alt="Send" onClick={handleSend} />
            </div>
          </div>

          <div className="bottom-info">
            <p>
              I can help you learn by providing hints and guidance rather than direct answers.
              I'll guide you step-by-step towards the solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
