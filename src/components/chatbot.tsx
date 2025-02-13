import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "500px",
            border: "none",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            background: "white",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://webagent.ai/chatbot/embed/7a15685a-efbb-4816-91fd-8f69de29776a/classic"
            style={{ width: "100%", height: "100%", border: "none" }}
          ></iframe>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "white",
              color: "black",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"
            }}
          >
            ✖
          </button>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "50px",
            height: "50px",
            background: "#ed0f4e",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
          }}
        >
          💬
        </div>
      )}
    </div>
  );
};

export default Chatbot;
