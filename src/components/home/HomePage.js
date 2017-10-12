import React from 'react';
import {Link} from 'react-router';
import DieDisplay from './DieDisplay';
import DiceRollApp from './DiceRollApp';

class HomePage extends React.Component{
  render(){
    return (
      <div>
        <DiceRollApp />
      </div>
    );
  }
}

export default HomePage;
