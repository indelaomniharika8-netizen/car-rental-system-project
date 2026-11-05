import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo admin login
    if (email === "admin@gmail.com" && password === "admin123") {
      const admin = {
        name: "Admin",
        email,
        role: "admin"
      };

      onLogin(admin);
      navigate("/admin");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      onLogin(user);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <p>New user? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;