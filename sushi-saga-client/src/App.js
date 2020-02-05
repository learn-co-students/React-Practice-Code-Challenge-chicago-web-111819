import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
    constructor(){
      super()
  
      this.state = {
        sushis: [],
        consumed: [],
        wallet: 100,
        displayIndex: 0
      }
    }
  
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushisObj => {
      // console.log(sushisObj)
      this.setState({
        sushis: sushisObj
      })
    })
  }

  fourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
  }

  moreBtnLogic = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4 

    if(newDisplayIndex >= this.state.sushis.length){
      newDisplayIndex = 0
    }

    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  consumeFcn = (sushi) => {
    const newWallet = this.state.wallet - sushi.price

    if(!this.state.consumed.includes(sushi) && newWallet >=0) {
      this.setState({
        consumed: [...this.state.consumed, sushi],
        wallet: newWallet
      })
    }
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.fourSushis()}
          moreBtnLogic={this.moreBtnLogic}
          consumed={this.state.consumed}
          consumeFcn={this.consumeFcn}
        />
        <Table 
          wallet={this.state.wallet}
          consumed={this.state.consumed}
        />
      </div>
    );
  }
}

export default App;