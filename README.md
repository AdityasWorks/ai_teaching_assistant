# AI Teaching Assistant  

## Overview  
The **AI Teaching Assistant** is a chat-based application designed to help users understand **Data Structures and Algorithms (DSA)** problems. It allows users to submit **LeetCode problem links** along with their queries, and the assistant provides guidance, hints, and conceptual explanations using an **LLM (like GPT or Gemini)**—without directly giving away the solution.  

## Live Demo  
Check out the live version of the AI Teaching Assistant: [AI Teaching Assistant](https://ai-teaching-assistant-jck3.vercel.app/)  

## Features  
- 📌 **Chat Interface**: Users can ask questions about DSA problems in a friendly, conversational UI.  
- 🔗 **LeetCode Link Support**: Users can paste a **LeetCode problem link**, and the assistant will tailor its guidance accordingly.  
- 🤖 **LLM Integration**: Uses GPT/Gemini to generate responses focused on **hints, intuition-building, and problem-solving approaches**.  
- ⏳ **Progressive Hints System**:  
  - High-level strategy hints  
  - Algorithmic approach hints  
  - Framework for problem-solving  
  - Pseudocode (only if necessary)  
- 🚀 **Encouraging Learning**: Helps users reflect on their approach, time complexity, and problem-solving strategies.  

## Tech Stack  
- **Frontend**: React.js  
- **Backend**: Node.js (or any API handling the LLM interaction)  
- **LLM Integration**: OpenAI GPT / Google Gemini API  

## Setup Instructions  
### 1️⃣ Clone the Repository  
```sh  
git clone https://github.com/AdityasWorks/ai-teaching-assistant.git  
cd ai-teaching-assistant  
```
### 2️⃣ Install Dependencies  
```sh  
npm install  
```
### 3️⃣ Set Up API Keys  
Create a `.env` file in the project root and add:  
```sh  
VITE_GEMINI_API=your_llm_api_key  
```
### 4️⃣ Start the Application  
```sh  
npm run dev  
```
The app will run at `http://localhost:3000/`.  

## How It Works  
1. **User enters a DSA question** or pastes a **LeetCode link** in the input box.  
2. **LLM processes the query** and provides **hints, strategies, and thought-provoking questions** instead of direct answers.  
3. The assistant encourages **problem-solving reflection** to enhance learning.  
4. Users can **continue the conversation** for further clarification.  

## Example Prompt Behavior  
If a user submits the **House Robber Problem (LeetCode 198)**, the assistant might respond with:  
✅ **"This problem is about Dynamic Programming. Can you think of a way to break it down into smaller subproblems?"**  
✅ **"Have you considered storing previous results to avoid recomputation?"**  
✅ **"Try solving it with recursion first. What happens if you memoize the results?"**  

Instead of just providing the DP solution outright.  

## Contribution  
Feel free to fork the repo and submit pull requests! 🚀  

## License  
MIT License  
