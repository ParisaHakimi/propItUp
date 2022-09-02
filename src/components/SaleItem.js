import React from "react";

const SaleItem = ({ name, age, hairColor }) => {
  return (
    <>
     <div className="container">
     <h1> {name}</h1>
      <h3>{age}</h3>
      <h4>{hairColor}</h4>
     </div>
    </>
  );
};

export default SaleItem;
