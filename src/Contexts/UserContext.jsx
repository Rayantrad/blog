import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Rami",
    role: "user",
  });
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, isAuth }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
export { UserContext };
