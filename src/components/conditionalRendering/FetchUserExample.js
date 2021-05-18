import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/matovu-ronald";

const FetchUserExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log(error.statusText);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ul className="users">
        <li>
          <img src={user.avatar_url} alt={user.login} />
          {user.login}
        </li>
      </ul>
    </React.Fragment>
  );
};

export default FetchUserExample;
