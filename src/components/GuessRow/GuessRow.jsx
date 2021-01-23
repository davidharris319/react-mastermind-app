import React from 'react';

// Components
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = (props) => (
  <div className='component'>
    Guess Row #
    <GuessPegs/>
    <GuessScore/>
  </div>
);

export default GuessRow;