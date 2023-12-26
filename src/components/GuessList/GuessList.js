import React from 'react';
import Guess from '../Guess'
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessList({ guesses }) {
  const guessCount = guesses.length
  const fillCount = NUM_OF_GUESSES_ALLOWED - guessCount;
  
  const fill = range(fillCount).map(() => null)
  
  return <div className="guess-results">
    {[...guesses, ...fill].map((guess) => (
      <Guess key={crypto.randomUUID()} guess={guess} />
    ))}
  </div>;
}

export default GuessList;
