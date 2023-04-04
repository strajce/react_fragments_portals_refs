import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UsersList = (props) => {
  return (
    <Card classNema={classes.users}>
      <ul className={classes.ul}>
        {props.users.map((user) => (
          <li key={user.id} className={classes.li}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
