import React from 'react';
import Header from './Header';
import Tamagotchi from './Tamagotchi';
//import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

import Buttons from './Buttons';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tamagotchi:{
      name: 'Tama',
      tiredness: 0,
      hunger: 0,
      happieness: 10,
      isAlive: true
    }};
    this.handleFeedingTamagotchi = this.handleFeedingTamagotchi.bind(this);
    this.handleSleepingTamagotchi = this.handleSleepingTamagotchi.bind(this);
    this.handlePlayingTamagotchi = this.handlePlayingTamagotchi.bind(this);
    console.log('constructor');
  }

  startGame(){
    this.tamagotchiUpdateTimer = setInterval(() =>
        this.updateTamagotchi(), 1000
    );
  }

  componentDidMount(){
    console.log("DidMount");
    this.startGame();
  }

  updateTamagotchi(){
    let newTamagochi = Object.assign({},this.state.tamagotchi);
    newTamagochi.tiredness++;
    newTamagochi.hunger++;
    newTamagochi.happieness--;

    if(newTamagochi.tiredness>=10 || newTamagochi.hunger>=10 || newTamagochi.happieness<=0){
      newTamagochi.isAlive = false;
      clearInterval(this.tamagotchiUpdateTimer);
    }
    this.setState({tamagotchi: newTamagochi});
  }

  handlePlayingTamagotchi(){
    let newTamagochi = Object.assign({},this.state.tamagotchi);
    newTamagochi.happieness++;
    this.setState({tamagotchi: newTamagochi})
  }

  handleFeedingTamagotchi(){
    let newTamagochi = Object.assign({},this.state.tamagotchi);
    newTamagochi.hunger--;
    this.setState({tamagotchi: newTamagochi})
  }

  handleSleepingTamagotchi(){
    let newTamagochi = Object.assign({},this.state.tamagotchi);
    newTamagochi.tiredness--;
    this.setState({tamagotchi: newTamagochi})
  }
  // componentWillMount(){
  //   console.log('componentWillMount');
  // }
  //
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps');
  // }
  //
  // shouldComponentUpdate(){
  //   console.log('shouldComponentUpdate');
  //   return true;
  // }
  //
  // componentWillUpdate(){
  //   console.log('componentWillUpdate');
  // }
  //
  // componentDidUpdated(){
  //   console.log('componentDidUpdated');
  // }

  componentWillUnmount(){
    clearInterval(this.tamagotchiUpdateTimer);
  }

  render(){
    console.log(this.state.tamagotchi);
    return (
      <div>
        <Header/>
        <Tamagotchi tamagotchi={this.state.tamagotchi} />
        <Buttons
          onButtonFeed={this.handleFeedingTamagotchi}
          onButtonSleep={this.handleSleepingTamagotchi}
          onButtonPlay={this.handlePlayingTamagotchi}/>
        <Switch>

        </Switch>
      </div>
    );
  }

}

export default App;
