import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./Sommaire.css";

const Sommaire = () => {
  const [score, setScore] = useState([]);
  useEffect(() => {
    setScore(data);
  }, []);

  return (
    <div className="sommaire">
      <ul>
        {score.map((element, index) => (
          <ul className={`sommaire_intra element-${index}`}>
            <li>
              <span>
                <img src={element.icon} />
              </span>
              {element.category}
            </li>

            <li>{element.score} /100 </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Sommaire;
