import { createContext, useEffect, useState } from "react";
import api from "../Utils/api";
import { useNavigate } from "react-router";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [loginError, setLoginError] = useState();

  async function fetchMe() {
    const result = await api.get("/auth/me");

    setUser(result.data.data);
  }
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
      fetchMe();
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  async function login(email, password) {
    setLoading(true);
    try {
      const result = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      const { user, token } = result.data.data;
      setUser(user);
      setToken(token);
      setIsAuth(true);
      localStorage.setItem("token", token);
    } catch (error) {
      setLoginError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setToken("");
    setUser("");
    setIsAuth(false);
  }

  const value = { user, isAuth, login, logout, loading, token, loginError };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
export { UserContext };
