import React, { useState } from "react";
import { data } from "../../data";

const PropDrillingExample = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return <Persons people={people} removeItem={removeItem} />;
};

const Persons = ({ people, removeItem }) => {
  return (
    <React.Fragment>
      <ul>
        {people.map((person) => (
          <Person key={person.id} {...person} removeItem={removeItem} />
        ))}
      </ul>
    </React.Fragment>
  );
};

const Person = ({ id, name, removeItem }) => {
  return (
    <React.Fragment>
      <li className="item">
        <h4>{name}</h4>
        <p onClick={() => removeItem(id)}>remove</p>
      </li>
    </React.Fragment>
  );
};

export default PropDrillingExample;
