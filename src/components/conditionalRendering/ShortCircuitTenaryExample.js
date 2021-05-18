import React, { useState } from "react";

const ShortCircuitTenaryExample = () => {
  const [isError, setIsError] = useState(false);
  return (
    <div>
      <h2>{isError || "Hello world ||"}</h2>
      <h2>{isError && "Hello world &&"}</h2>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      <h2>
        {isError ? (
          <p>there is an error here ....</p>
        ) : (
          <div>
            <h3>There is no error here</h3>
          </div>
        )}
      </h2>
    </div>
  );
};

export default ShortCircuitTenaryExample;
