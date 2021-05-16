import React, { useState, useEffect } from "react";

const CleanUpExample = () => {
  const [size, setSize] = useState(window.innerWidth);

  const getCurrentSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getCurrentSize);

    // return () => {
    //   window.removeEventListener("resize", getCurrentSize);
    // };
  }, []);

  return (
    <>
      <h1>The clean up function</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default CleanUpExample;
