import React from "react";
import './Synonyms.css';

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h4>Synonyms</h4>
        <ul className= "Synonyms-list">
          {props.synonyms.map((synonym, index) => {
            return (
              <li key={index}>{synonym}</li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
