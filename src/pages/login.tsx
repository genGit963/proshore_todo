import React, { useState } from "react";
import { useUserStore } from "../store/user_store";
import { useNavigate } from "react-router-dom";

import "./login.scss";
import { LoginInterface } from "../models/user";
import USER_APIs from "../api/user_api";
import LoadingEffect from "../utils/loading/loading";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginInterface>({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     handleSubmit(e as any); // Call handleSubmit when Enter key is pressed
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("LoginPage: ", formData);
    e.preventDefault();
    try {
      setLoading(true);
      await USER_APIs.login(formData).then((response) => {
        // console.log("LoginRes: ", response.data);
        setUser(response.data);
        navigate("/");
      });
    } catch (error) {
      setError(String(error));
      console.error("Login failed:", error);
    } finally {
      alert(`Login Successful !!`);
      setLoading(false);
    }
  };

  return (
    <div className="login_page">
      {loading ? (
        <LoadingEffect />
      ) : (
        <div className="login_container">
          <h1>PROSHORE TODO </h1>
          <h2>LOGIN</h2>
          <form onSubmit={handleSubmit} className="login_from">
            <input
              type="email"
              placeholder="Email"
              name="Email"
              value={formData.Email}
              onChange={(e) =>
                setFormData({ ...formData, Email: e.target.value })
              }
              required
            />

            <input
              name="password"
              value={formData.Password}
              onChange={(e) =>
                setFormData({ ...formData, Password: e.target.value })
              }
              required
              type="password"
              placeholder="Password"
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>

          <p className="to_signup">
            Not a member of proshore todo?{" "}
            <span onClick={() => navigate("/signup")}>Sign Up</span>
          </p>

          <p
            style={{
              color: "red",
              textAlign: "center",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            Forget Password ?
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
