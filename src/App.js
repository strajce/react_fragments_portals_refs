import "./App.css";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React, { useState, Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
