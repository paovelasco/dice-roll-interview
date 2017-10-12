import React, {PropTypes} from 'react';

const DieDisplay = ({value, isRolling}) => {
  if (!value || isRolling) {
    return(
      <div className="die"></div>
    );
  }

  return(
    <div className="die">{value}</div>
  );
};

DieDisplay.propTypes = {
  value: PropTypes.number,
  isRolling: PropTypes.bool.isRequired
};

export default DieDisplay;
