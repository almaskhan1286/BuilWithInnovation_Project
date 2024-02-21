import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      await axios
        .post("https://dummyjson.com/auth/login", {
          username,
          password,
        })
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem("token", token);
          console.log("LOgged In Succ");
          navigate("/");
        });
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    return new Promise((resolve) => {
      localStorage.removeItem("token");
      navigate("/login");

      resolve();
    });
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return { login, logout, isAuthenticated };
};
