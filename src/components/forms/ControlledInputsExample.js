import React, { useState, Fragment } from "react";

const ControlledInputsExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      setPeople((prevPeople) => {
        return [...prevPeople, person];
      });
      setName("");
      setEmail("");
    } else {
      alert("You cannot submit empty values");
    }
  };

  const removePerson = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };

  return (
    <Fragment>
      <h1>Controlled inputs</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            className=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            className=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            id="email"
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {people.map((person, index) => {
        const { id, name, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p onClick={() => removePerson(id)}>X</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ControlledInputsExample;
