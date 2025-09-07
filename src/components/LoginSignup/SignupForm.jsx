import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      if (isLogin) {
        const response = await axios.post("/api/login", formData, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log("Login success:", response.data);
        navigate("/home");
      } else {
        const response = await axios.post("/api/signup", formData, {
          headers: { "Content-Type": "application/json" },
        });
        console.log("Signup success:", response.data);
        setIsLogin(true);
      }
    } catch (error) {
      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong!";
      setErrorMessage(msg);
      console.error("Error:", msg);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "1.8rem", color: "#333" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={{
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "10px",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: "10px",
              marginBottom: "20px",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#007bff",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          {errorMessage && (
            <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
          )}
        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          style={{
            marginTop: "15px",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "0.9rem",
          }}
        >
          {isLogin ? "Not a user? Please Sign Up" : "Already a user? Login now"}
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
