import React from 'react';

class AboutPage extends React.Component{
  render(){
    return (
      <div className="jumbotron">
        <p>Dice Roll</p>
        <ul>
          <li>Mini coding project for an interview.</li>
          <li>Created by Pablo Velasco</li>
          <li>Stack used: React, Mocha, Enzyme, Expect, CSS, HTML</li>
          <li>August, 2017</li>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
