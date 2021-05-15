import React, { useState } from "react";

const ObjectExample = () => {
  const [person, setPerson] = useState({
    name: "Matovu Ronald",
    age: "27",
    message: "This is a pretty cool message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello world" });
  };

  return (
    <React.Fragment>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </React.Fragment>
  );
};

export default ObjectExample;
