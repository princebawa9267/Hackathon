import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white shadow-lg rounded-2xl p-4 w-80 mb-2 border border-gray-300">
          <h2 className="text-lg font-semibold mb-2">Chat with AI</h2>
          <div className="h-40 overflow-y-auto text-sm text-gray-700">
            <p>👋 Hello! How can I assist you today?</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-2 mt-2 border rounded-lg text-sm"
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>
    </div>
  );
}