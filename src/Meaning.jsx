import React from 'react';
import Synonyms from './Synonyms.jsx';
import './Results.css';

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
          <div>
            <p>{props.meaning.definition}</p>
            <em>{props.meaning.example}</em>
          </div>
          <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}