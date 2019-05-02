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
    this.state = {
      name: 'Tama',
      tiredness: 0,
      hunger: 0,
      happieness: 10,
      isAlive: true
    };
    this.handleFeedingTamagotchi = this.handleFeedingTamagotchi.bind(this);
  }

  startGame(){
    this.tamagotchiUpdateTimer = setInterval(() =>
        this.updateTamagotchi(), 10000
    );
  }

  componentDidMount(){
    startGame();
  }

  updateTamagotchi(){
    let newTamagochi = Object.assign({},this.state);
    newTamagochi.tiredness++;
    newTamagochi.hunger++;
    newTamagochi.happieness--;

    if(newTamagochi.tiredness>=10 || newTamagochi.hunger>=10 || newTamagochi.happieness<=0){
      newTamagochi.isAlive = false;
    }
    this.setState({this.state: newTamagochi});
  }

  handleFeedingTamagotchi(){
    let newTamagochi = Object.assign({},this.state);
  }

  handleFeedingTamagotchi(){
    let newTamagochi = Object.assign({},this.state);
    newTamagochi.hunger--;
    this.setState({this.state: newTamagochi})
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
    return (
      <div>
        <Header/>
        <Tamagotchi tamagotchi={this.state} />
        <Buttons/ onButtonFeed={this.props.handleFeedingTamagotchi}>
        <Switch>

              //<Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
