import React, { useState } from 'react';
import GuessInput from '../GuessInput'
import GuessList from '../GuessList'
import WinBanner from '../WinBanner'
import LossBanner from '../LossBanner'
import { sample } from '../../utils';
import { checkGuess, checkWinCondition } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])

  const hasWon = guesses.length > 0 && checkWinCondition(guesses[guesses.length - 1])
  const gameOver = hasWon || guesses.length === NUM_OF_GUESSES_ALLOWED
  console.log(hasWon, gameOver);
  const handleInput = (text) => {
    const newGuess = checkGuess(text, answer)
    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <GuessInput handleInput={handleInput} disabled={gameOver} />
      {gameOver && hasWon && <WinBanner guessCount={guesses.length}/>}
      {gameOver && !hasWon && <LossBanner answer={answer}/>}
    </>
  );
}

export default Game;
