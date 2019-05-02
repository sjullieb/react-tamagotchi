import React from 'react';
import Header from './Header';
//import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

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
  }

  startGame(){
    this.tamagotchiUpdateTimer = setInterval(() =>
        this.updateTamagotchi(), 10000
    );
  }

  updateTamagotchi(){
    let newTamagochi = Object.assign({},this.state);
    newTamagochi.tiredness++;
    newTamagochi.hunger++;
    newTamagochi.happieness--;

    if(newTamagochi.tiredness>=10 || newTamagochi.hunger>=10 || newTamagochi.happieness<=0){
      newTamagochi.isAlive = false;
    }
  }

  checkIsTamagotchiAlive(){

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

  updateTicketElapsedWaitTime(){
  //  console.log('check');
  //  console.log(this.state.masterTicketList);
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    Object.keys(newMasterTicketList).forEach(ticketId => {
      newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    })
    this.setState({masterTicketList: newMasterTicketList});
  }

  componentWillUnmount(){
    clearInterval(this.tamagotchiUpdateTimer);
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>

              //<Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
