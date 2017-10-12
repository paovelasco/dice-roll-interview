import React, {PropTypes} from 'react';
import DieDisplay from './DieDisplay';

const ThrowDisplay = ({dice, isRolling}) => {
  const diceList = dice.map((die, index) => <DieDisplay value={die} isRolling={isRolling} key={index}/>);

  return(
    <div className="throw-display">
      {diceList}
    </div>
  );
};

ThrowDisplay.propTypes = {
  dice: PropTypes.array,
  isRolling: PropTypes.bool.isRequired
};

export default ThrowDisplay;
