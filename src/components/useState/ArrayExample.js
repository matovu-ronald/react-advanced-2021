import React, { useState } from "react";
import { data } from "../../data";

const ArrayExample = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (personId) => {
    let newPeople = people.filter((person) => person.id !== personId);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item">
            <h4>
              {id}. {name}
            </h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear items
      </button>
      {}
      {people.length === 0 && (
        <button className="btn" onClick={() => setPeople(data)}>
          Reset Item
        </button>
      )}
    </React.Fragment>
  );
};

export default ArrayExample;
