import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import api from "../../Utils/api";

function HomePage() {
  const { user, isAuth } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-5xl">Home Page</h1>
      <p>{isAuth ? `Welcome ${user?.name}` : "Welcome Guest"}</p>
    </div>
  );
}

export default HomePage;
