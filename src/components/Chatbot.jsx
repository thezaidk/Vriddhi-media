import React, { useState } from "react";
import axios from "axios";
import { CircleX } from 'lucide-react';


function Chatbot({ setShowChatbot }) {
  const [messages, setMessages] = useState([{ text: "Hey, How can I assist you?", sender: "bot"}]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful agency assistant company called vriddhi media solutions. Vriddhi Media is a full-service media agency passionate about crafting impactful marketing campaigns that deliver measurable results. your task is to suggest the services and assist them to contact us with the phone number: +910266537839 email: info@vriddhi.media" },
            ...newMessages.map(msg => (
              { 
                role: msg.sender === "user" ? "user" : "bot", content: msg.text 
              }
            )),
            { role: "user", content: input }
          ],
        },
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = response.data.choices[0].message.content;
      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div className="z-50 fixed flex flex-col items-center bottom-32 right-10 bg-blue-50 px-5 pb-5 pt-2 rounded-lg border-8 shadow-lg space-y-5 max-w-[20rem] w-full">
      <div className="flex flex-col items-center w-full border-b-2 border-zinc-500 p-2">
        <div className="flex justify-end w-full pb-5">
            <CircleX 
                size={15}
                className="hover:bg-zinc-300 rounded-full cursor-pointer"
                onClick={() => setShowChatbot(false)}
            />
        </div>
        <h2 className="font-bold text-xl">Chatbot</h2>
      </div>
      <div className="items-start w-full h-[15rem] overflow-auto">
        <ul className="flex flex-col gap-2 text-sm">
            {messages.map((msg, index) => (
            <li key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex justify-center items-center h-11 w-11 rounded-full mr-2 ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-orange-600 text-white"}`}>
                {msg.sender === "user" ? "You" : "Bot"}
                </div>
                <div className="bg-gray-200 p-2 rounded-lg break-words max-w-[75%]">
                {msg.text}
                </div>
            </li>
            ))}
        </ul>
        </div>
      <div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
            className="rounded-full mr-2 p-2"
        />
        <button 
            onClick={sendMessage}
            className="bg-orange-600 text-white p-2 rounded-full"
        >
            Send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;