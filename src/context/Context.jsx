import { createContext, useState } from "react";
import runChat from "../config/Gemini";
import { enhancePrompt } from "./promptEngineering";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [leetCodeURL, setLeetCodeURL] = useState("");

  const [chatHistory, setChatHistory] = useState([]);
  const [isNewChat, setIsNewChat] = useState(true);

  const newChat = () => {
    setLoading(false);
    setShowResults(false);
    setResultData("");
    setIsNewChat(true);
    setChatHistory([]);
  };

  const onSent = async (userPrompt, leetCodeURL) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);
  
    setRecentPrompt(userPrompt);

  
    const historyForAPI = isNewChat ? [] : chatHistory.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));
  
    try {
      const updatedHistory = [
        ...chatHistory,
        { role: "user", content: userPrompt }
      ];
      setChatHistory(updatedHistory);
  
      const response = await runChat(enhancePrompt(userPrompt, leetCodeURL), historyForAPI);
  
      setChatHistory(prev => [
        ...prev,
        { role: "model", content: response }
      ]);
  
      setResultData(response);
      setIsNewChat(false);
    } catch (error) {
      console.error("Error while running chat:", error);
      setResultData("I encountered an error processing your request. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };
  

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    input,
    setInput,
    showResults,
    loading,
    resultData,
    newChat,
    chatHistory,
    leetCodeURL,
    setLeetCodeURL,
    
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
