import React, { useState } from 'react';

export default function OnClick() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleYesClick = () => {
    setYesClicked(true);
    setNoClicked(false);
  };

  const handleNoClick = () => {
    setNoClicked(true);
    setYesClicked(false);
  };

  return (
    <div className="onclick">
      <button 
        onClick={handleYesClick} 
        className={yesClicked ? 'yes-button clicked' : 'yes-button'}
      >
        Yes
      </button>
      <button 
        onClick={handleNoClick} 
        className={noClicked ? 'no-button clicked' : 'no-button'}
      >
        No
      </button>
    </div>
  );
}

