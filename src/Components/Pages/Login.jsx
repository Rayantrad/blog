import React, { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";

function Login() {
  const { login, loginError, loading } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      setEmailError("");
      setPasswordError("");
    } else if (email && !password) {
      setPasswordError("Password is required!");
      setEmailError("");
    } else if (!email && password) {
      setEmailError("Email is required!");
      setPasswordError("");
    } else {
      setEmailError("Email is required!");
      setPasswordError("Password is required!");
    }
  }

  return (
    <div className="text-white border rounded px-2 py-3">
      <h3 className="text-center text-lg">Login</h3>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className={`border rounded my-1 p-1 ${
            emailError && "border-red-400"
          }`}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className={`border rounded my-1 p-1 ${
            passwordError && "border-red-400"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {loginError && (
          <span className="bg-red-300 text-white px-2 py-1 rounded text-center">
            {loginError}
          </span>
        )}
        {emailError && (
          <span className="bg-red-300 text-white px-2 py-1 rounded text-center">
            {emailError}
          </span>
        )}
        {passwordError && (
          <span className="bg-red-300 text-white px-2 py-1 rounded text-center">
            {passwordError}
          </span>
        )}
        <button
          disabled={loading}
          className={`${
            loading ? "bg-gray-300 text-white" : "bg-white text-black "
          } px-3 py-1 rounded mt-3`}
        >
          {loading ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
