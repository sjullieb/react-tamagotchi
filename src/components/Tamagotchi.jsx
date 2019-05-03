import React from 'react';

function Tamagotchi(props){
  let { name, happieness, hunger, tiredness } = props.tamagotchi; // obj destructuring
console.log(props);
  return(
    <div>
      <h3>{name}</h3>
      <p>Happieness: {happieness}</p>
      <p>Hunger: {hunger}</p>
      <p>Tiredness: {tiredness}</p>
    </div>
  );
}

export default Tamagotchi;
