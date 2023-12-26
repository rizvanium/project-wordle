import React from 'react';
import { range } from '../../utils'
import { WORD_LENGTH } from '../../constants'

function Guess({ guess }) {
  return <p className='guess'>
    {guess && guess.map(({status, letter}) => (
      <span key={crypto.randomUUID()} className={`cell ${status}`}>{letter}</span>
    ))}
    {!guess && range(WORD_LENGTH).map(() => <span key={crypto.randomUUID()} className='cell'></span>)}
  </p>;
}

export default Guess;
