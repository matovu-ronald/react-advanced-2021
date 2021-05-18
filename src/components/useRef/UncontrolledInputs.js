import React, { useRef, useEffect } from "react";

const UncontrolledInputs = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <React.Fragment>
      <h1>Uncontrolled inputs</h1>
      <form onSubmit={handleSubmit} className="form">
        <input ref={refContainer} type="text" />
        <button type="submit">Save</button>
      </form>
      <div ref={divContainer}>This is me in full swing</div>
    </React.Fragment>
  );
};

export default UncontrolledInputs;
