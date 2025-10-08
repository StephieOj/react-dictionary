import React from 'react';
import './Results.css';
import Meaning from './Meaning.jsx';


export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        <p>{props.results.phonetic}</p>

       {props.results.meanings.map(function(meaning, index){
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>

          )
       }
        )}
      </div>
    );
  } else {
    return null;
  }
}
