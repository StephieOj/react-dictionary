import React from 'react';
import Synonyms from './Synonyms.jsx';
import './Meaning.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
          <div>
            <p><strong>Definition: </strong>{props.meaning.definition}</p>
            <p className="example"><strong>Example: </strong> <em>{props.meaning.example}</em></p>
          </div>
          <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}