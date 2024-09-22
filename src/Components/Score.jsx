import React from "react";
import "./Score.css";

const Score = () => {
  return (
    <div className="score">
      <h3>Your results</h3>
      <h2 className="cercle">
        76
        <p>of 100</p>
      </h2>
      <h1>Great</h1>
      <p>
        You scored highter than 65% of the people who have taken these test.
      </p>
    </div>
  );
};

export default Score;
