import React, { useState, useReducer } from "react";

import Modal from "./Model";
import { data } from "../../data";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item added",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: action.payload,
      isModalOpen: true,
      modalContent: "Item removed",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  throw new Error("No matching action type");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello world",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeItem = (id) => {
    const newPeople = state.people.filter((person) => person.id !== id);
    dispatch({ type: "REMOVE_ITEM", payload: newPeople });
    // setPeople(people.filter((person) => person.id !== id));
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <React.Fragment>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <ul>
        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <li key={id} className="item">
              <h4>{name}</h4>
              <p onClick={() => removeItem(id)}>X</p>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Index;
