import React, { useState } from 'react';

function GuessInput({ handleInput }) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    handleInput(guess);
    setGuess('');
  }

  return <form onSubmit={handleSubmit} className='guess-input-wrapper'>
    <label htmlFor='guess-input'>Enter guess:</label>
    <input 
      id='guess-input'
      type='text'
      value={guess}
      onChange={({ target }) => setGuess(target.value.toUpperCase())}
      maxLength={5}
      pattern='[A-Za-z]{5}'
      title='Has to be 5 letters'
    />
  </form>;
}

export default GuessInput;
