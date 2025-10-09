import React from 'react';
import './Results.css';
import Meaning from './Meaning.jsx';


export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
        <h3 className = "word">{props.results.word}</h3>
        <p className= "phonetic">{props.results.phonetic}</p>
      </section>

       {props.results.meanings.map(function(meaning, index){
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>

          )
       }
        )}
      </div>
    );
  } else {
    return null;
  }
}
