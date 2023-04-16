import { useState, createContext, useContext } from "react";

const UserContext = createContext();

function Hej() {
  const [user] = useState("Blommor");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Gillar ${user}!`}</h1>
      <A />
    </UserContext.Provider>
  );
}

function A() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>{`Gillar verkligen ${user}!`}</h2>
    </>
  );
}

export default Hej
