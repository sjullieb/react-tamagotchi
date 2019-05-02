import React from 'react';

function Buttons(props){

  return(
    <div>
      <button onClick={()=>{props.onButtonFeed()}}>Feed</button>
      <button onClick={()=>{props.onButtonSleep()}}>Put to sleep</button>
      <button onClick={()=>{props.onButtonPlay()}}>Play</button>
    </div>
  );
}

export default Buttons;
