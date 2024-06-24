import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginService = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      } else {
        throw new Error(data.mess);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async () => {
    try {
      const data = await loginService(email, password);

      if (data.err === 0) {
        login({ email: data.email, token: data["access token"] });
        localStorage.setItem("token", data["access token"]);

        if (email === "admin@gmail.com" && password === "1q2z3w4x") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setError(data.mess);
      }
    } catch (error) {
      console.error("Đã xảy ra lỗi khi đăng nhập", error);
      setError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
    }
  };

  return (
    <div>
      <Header />
      <div className="login">
        <div className="login-form">
          <form onSubmit={(e) => e.preventDefault()} className="form">
            <h1 className="form__title">Đăng nhập</h1>
            <div className="form__field">
              <label className="form__label">Email hoặc SĐT</label>
              <input
                onChange={handleEmailChange}
                value={email}
                name="email"
                type="text"
                placeholder="Email hoặc SĐT"
                required
                className="form__input"
              />
            </div>
            <div className="form__field">
              <label className="form__label">Mật khẩu</label>
              <input
                onChange={handlePasswordChange}
                value={password}
                name="password"
                type="password"
                placeholder="Password"
                required
                className="form__input"
              />
            </div>
            <div className="remember-forgot">
              <label className="form__label--checkbox">
                <input type="checkbox" className="form__checkbox" />
                Lưu đăng nhập
              </label>
              <a href="/forgot-password" className="form__link">
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn__submit">
              <button
                type="submit"
                className="form__submit"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="from__register">
              <p className="form__text-register">
                Bạn chưa có tài khoản?
                <a href="/register" className="form__register">
                  Đăng ký
                </a>
              </p>
            </div>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
