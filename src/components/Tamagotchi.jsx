import React from 'react';

function Tamagotchi(props){
  var tamagotchi = props.tamagotchi;
console.log(props);
  return(
    <div>
      <h3>{tamagotchi.name}</h3>
      <p>Happieness: {tamagotchi.happieness}</p>
      <p>Hunger: {tamagotchi.hunger}</p>
      <p>Tiredness: {tamagotchi.tiredness}</p>
    </div>
  );
}

export default Tamagotchi;
