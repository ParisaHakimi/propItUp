import React, { useState } from "react";

const SaleItem = ({ namee, initialAge, hairColor }) => {
  // let newage= parsInt(initialAge);
  const [age, setAge] = useState(parseInt(initialAge));
  return (
    <>
      <div className="container">
        <h2>{namee}</h2>
        <h3>Age: {age}</h3>
        <h4>Hair color: {hairColor}</h4>
        <button
          onClick={(e) => {
            setAge(age + 1);
          }}
        >
          Brthday Button for {namee}
        </button>
      </div>
    </>
  );
};

export default SaleItem;
