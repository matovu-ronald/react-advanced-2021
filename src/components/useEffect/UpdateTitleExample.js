import React, { useState, Fragment, useEffect } from "react";

const UpdateTitleExample = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect Hook");
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  return (
    <Fragment>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </Fragment>
  );
};

export default UpdateTitleExample;
