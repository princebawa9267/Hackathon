import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", display: "flex", flexDirection: "column", alignItems: "flex-end" ,zIndex: 9999}}>
      {isOpen && (
        <div style={{ backgroundColor: "white", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "12px", padding: "16px", width: "300px", border: "1px solid #ccc", marginBottom: "10px"}}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>Chat with AI</h2>
          <div style={{ height: "150px", overflowY: "auto", fontSize: "14px", color: "#555", padding: "8px", border: "1px solid #ddd", borderRadius: "6px", backgroundColor: "#f9f9f9" }}>
            <p>👋 Hello! How can I assist you today?</p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            style={{ width: "100%", padding: "8px", marginTop: "8px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" }}
          />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "#007bff",
          padding: "12px",
          borderRadius: "50%",
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s"
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        <MessageCircle style={{ color: "white", width: "24px", height: "24px" }} />
      </button>
    </div>
  );
}
