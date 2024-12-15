import { useState } from "react";
import Chatbot from "./Chatbot";
import { BotMessageSquare } from "lucide-react";

export default function () {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <div className="absolute">
            <button 
                onClick={() => setShowChatbot(!showChatbot)}
                className={`fixed bottom-10 right-10 h-16 w-16 rounded-full bg-yellow-500 flex justify-center items-center ${!showChatbot && "animate-bounce"}`}
            >
                <BotMessageSquare />
            </button>
            {showChatbot && <Chatbot setShowChatbot={setShowChatbot} />}
        </div>
    )
}