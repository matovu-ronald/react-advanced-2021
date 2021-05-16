import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchDataExample = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>Fetching github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank">
                  Github Account
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchDataExample;
