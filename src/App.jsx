import { Routes, Route } from "react-router-dom";
import SignupForm from "../src/components/LoginSignup/SignupForm";
import HomePage from "../src/components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<SignupForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<SignupForm />} />
    </Routes>
  );
}

export default App;
