import React from 'react';

function Buttons(props){

  function handleFeeding(){
    props.onButtonFeed();
  }
  return(
    <div>
      <button onClick={handleFeeding}>Feed</button>
      <button onClick={handleSleeping}>Put to sleep</button>
      <button onClick={handlePlaying}>Play</button>
    </div>
  );
}

export default Buttons;
