import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import api from "../../Utils/api";

function HomePage() {
  const { user, isAuth } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await api.post("/users", {
        password: "123",
        email: "tst",
      });
      setUsers(result.data);
      console.log(result.data[0]);
    }
    getUsers();
  }, []);
  return (
    <div>
      <h1 className="text-5xl">Home Page</h1>
      <p>{isAuth ? `Welcome ${user.name}` : "Welcome Guest"}</p>
    </div>
  );
}

export default HomePage;
