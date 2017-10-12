class DieRoller {
  constructor(numberOfSides = 6){
    if(numberOfSides < 1){
      throw new Error ("Number of sides of Die cannot be less than 1");
    }

    this._numberOfSides = numberOfSides;
  }

  get numberOfSides() {return this._numberOfSides;}

  rollAndGetValue() {
    return Math.floor(Math.random() * this._numberOfSides) + 1;
  }
}

export default DieRoller;
