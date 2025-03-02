import React, { useContext, useState } from 'react';
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {

  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
    chatHistory,
    newChat,
  } = useContext(Context);

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="top">
        <img onClick={() => setExpanded(prev => !prev)} src={assets.menu_icon} alt="" className="menu" />

        <div className="new-chat" onClick={newChat}>
        {/* <button onClick={newChat} className="new-chat-btn">New Chat</button> */}
          <img src={assets.plus_icon} alt="plus" onClick={newChat}  />
          {expanded ? <p>New Chat</p> : null}
        </div>

        {expanded ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="msg" />
              <p className="recent-name">Lets Start Learning</p>
            </div>
          </div>
          : null
        }
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {expanded ? <p>Ask a Question</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {expanded ? <p>Activity</p> : null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {expanded ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;