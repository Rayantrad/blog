import { createContext, useEffect, useState } from "react";
import api from "../Utils/api";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false); //  start as false
  const [loginError, setLoginError] = useState(null);

  async function fetchMe() {
    try {
      const result = await api.get("/auth/login");
      setUser(result.data.data);
      setIsAuth(true);
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setIsAuth(false);
    }
  }

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
      fetchMe();
    } else {
      setIsAuth(false);
    }
  }, []);

  async function login(email, password) {
    setLoading(true);
    setLoginError(null); //  clear previous errors
    try {
      const result = await api.post("/login", {
        email,
        password,
      });
      const { user, token } = result.data.data;
      setUser(user);
      setToken(token);
      setIsAuth(true);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response?.status === 401) {
        setLoginError("Invalid email or password");
      }
      setIsAuth(false); // ensure auth is false on failure

    } finally {
      setLoading(false);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuth(false);
  }

  const value = {
    user,
    isAuth,
    setIsAuth,
    login,
    logout,
    loading,
    token,
    loginError,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
export { UserContext };
