import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-3 w-100">
      <img src={loading} className="d-block mx-auto" alt="Loading" />
    </div>
  );
};

export default Spinner;
