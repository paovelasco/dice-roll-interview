import React, {PropTypes} from 'react';
import ThrowDisplay from './ThrowDisplay';
import {Button} from 'react-bootstrap';

const HistoryDisplay = ({rollHistory, onClearHistory}) => {
  if(rollHistory.length === 0){
    return null;
  }

  const rollList = rollHistory.map((roll, index) => <span key={index}><ThrowDisplay dice={roll} isRolling={false} /> - </span>);
  return(
    <div>
      <div className="history-subtitle">HISTORY</div>
      {rollList}
      <form>
        <Button id="clear-history-button" className="btn btn-danger" onClick={onClearHistory}>Clear History</Button>
      </form>
    </div>
  );
};

HistoryDisplay.propTypes = {
  rollHistory: PropTypes.array,
  onClearHistory: PropTypes.func
};

export default HistoryDisplay;
