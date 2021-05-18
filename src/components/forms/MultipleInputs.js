import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, email } = person;
    if (name && age && email) {
      const newPeople = [
        ...people,
        { id: new Date().getTime().toString(), name, age, email },
      ];

      setPeople(newPeople);
      setPerson({ id: "", name: "", age: "", email: "" });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h1>Multiple Input</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={person.name}
            onChange={handleChange}
            name="name"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            value={person.age}
            onChange={handleChange}
            name="age"
            id="age"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={person.email}
            onChange={handleChange}
            name="email"
            id="email"
          />
        </div>
        <button className="btn" type="submit">
          Save Person
        </button>
      </form>
      {people.map((person) => {
        const { id, name, age, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <p>{age}</p>
            <p>{email}</p>
            <p onClick={() => removePerson(id)}>X</p>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleInputs;
