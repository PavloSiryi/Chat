import React from 'react';

export default ({name, handleNameChange, handleNextClick}) => (
  <div>
    <p>Please provide your name:</p>
    <input value={name} onChange={e => handleNameChange(e.target.value)} />
    <button onClick={handleNextClick}>Next</button>
  </div>
);
