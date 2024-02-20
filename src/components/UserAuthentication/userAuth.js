import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    console.log("The token is" + token);
    return token;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Login failed");
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export { login, logout, isAuthenticated };
