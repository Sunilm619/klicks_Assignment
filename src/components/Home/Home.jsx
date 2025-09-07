import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function HomePage() {
  const navigate = useNavigate();
  const token = Cookies.get("klikscookie");

  const handleLogout = async () => {
    try {
      Cookies.remove("klikscookie");

      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #f0f4f8, #ffffff)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        🏠 Welcome Home!
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
        You are successfully logged in
      </p>
      <button
        onClick={handleLogout}
        style={{
          padding: "12px 24px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default HomePage;
