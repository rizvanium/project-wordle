import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput'

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = useState('')
  console.log('current word:', word);
  
  const handleInput = (text) => {
    setWord(text)
  }

  return (
    <><GuessInput handleInput={handleInput} /></>
  );
}

export default Game;
