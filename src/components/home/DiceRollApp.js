import React from 'react';
import {Button} from 'react-bootstrap';
import DieRoller from '../../models/DieRoller';
import ThrowDisplay from './ThrowDisplay';
import HistoryDisplay from './HistoryDisplay';

const NUMBER_OF_DICE = 2;
const NUMBER_OF_DICE_SIDES = 6;

class DiceRollApp extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      isRolling: false,
      dice: new Array(NUMBER_OF_DICE).fill(null),
      rollHistory: []
    };

    this.rollDice = this.rollDice.bind(this);
    this.clearHistory = this.clearHistory.bind(this);
  }

  rollDice() {
    this.setState({isRolling:true});
    setTimeout(()=> {
      const dieRoller = new DieRoller(NUMBER_OF_DICE_SIDES);
      let newRoll = this.state.dice.map(() => {
        return dieRoller.rollAndGetValue();
      });

      this.diceRolled(newRoll);
    }, 500);
  }

  diceRolled(roll) {
    let historyArray = this.state.rollHistory.slice();
    historyArray.push(roll);
    this.setState({isRolling:false, dice:roll, rollHistory: historyArray});
  }

  clearHistory() {
    this.setState({dice: new Array(NUMBER_OF_DICE).fill(null), rollHistory: []});
  }

  render() {
    return (
      <div>
        <div className="dice-roller-app">
          <form>
            <Button id="roll-dice" className="btn btn-primary" disabled={this.state.isRolling} onClick={this.rollDice}>ROLL DICE</Button>
          </form>
          <ThrowDisplay dice={this.state.dice} isRolling={this.state.isRolling} />
        </div>
        <HistoryDisplay rollHistory={this.state.rollHistory} onClearHistory={this.clearHistory}/>
      </div>
    );
  }
}

export default DiceRollApp;
