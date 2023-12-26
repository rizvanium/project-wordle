import React, { useState } from 'react';
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])

  console.log(guesses);

  const handleInput = (text) => {
    const newGuess = checkGuess(text, answer)
    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleInput={handleInput} />
    </>
  );
}

export default Game;
