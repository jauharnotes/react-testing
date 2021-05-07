import React, { useState } from "react";
import axios from "axios";

const CompAxiosCall = () => {
  const [users, setUsers] = useState([]);

  const getUserData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div>
      <p>List member kabayan coding:</p>
      <button onClick={getUserData} data-testid="get-user">
        get user
      </button>
      {users.map((user) => {
        return (
          <p data-testid="user-name" key={user.id}>
            {user.name}
          </p>
        );
      })}
    </div>
  );
};

export default CompAxiosCall;
