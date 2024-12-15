import { useState } from "react";
import Chatbot from "../components/Chatbot";

export default function () {
    const [showChatbot, setShowChatbot] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center gap-10 w-full my-64">
            <div className="flex flex-col items-center">
                <h2 className="text-xl font-bold text-blue-800">Services Page</h2>
                <p className="text-3xl font-bold">Oops! This page is under development!</p>
            </div>
            <div>
                <button 
                    onClick={() => setShowChatbot(!showChatbot)}
                    className="font-semibold text-white bg-blue-700 p-3 rounded-full"
                >
                    Open Chatbot
                </button>
                {showChatbot && <Chatbot setShowChatbot={setShowChatbot} />}
            </div>
        </div>
    )
}