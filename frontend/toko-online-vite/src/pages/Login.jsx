import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/styles/auth.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);

    // simpan token
    localStorage.setItem("token", res.data.token);

    // OPTIONAL: simpan nama user (kalau backend kirim)
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // redirect ke home
    navigate("/");

  } catch (error) {
    alert("Login gagal");
  }
};

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <p>Welcome Back</p>
          <h1>Login to Boutique</h1>
          <span>Masuk untuk melanjutkan pengalaman belanja fashion elegan.</span>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Belum punya akun? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;