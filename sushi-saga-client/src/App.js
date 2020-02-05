import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm'

const API = "http://localhost:3000/sushis"

class App extends Component {
	state = {
		sushis: [],
		currentPage: 0,
		money: 100
	}

	componentDidMount = () => {
		fetch(API)
			.then(resp => resp.json())
			.then(sushiObjs => {
				let updatedSushiObjs = sushiObjs
				updatedSushiObjs = updatedSushiObjs.map(sushiObj => {
					return {
						...sushiObj,
						eaten: false
					}
				})

				this.setState(prevState => ({
					...prevState,
					sushis: updatedSushiObjs
				}))
			})
	}

	eatSushi = (sushi_id) => {
		const sushis = this.state.sushis
		let currentMoney = this.state.money
		let sushiObjToUpdate = this.state.sushis.find(sushiObj => sushiObj.id === sushi_id) 

		if (sushiObjToUpdate.price > currentMoney) {
			alert('not enough $$$ fool')
			return
		}

		if (sushiObjToUpdate.eaten) {
			alert('you already ate this sushi')
			return
		}

		const updatedSushiObjs = sushis.map(sushiObj => {
			if (sushiObj === sushiObjToUpdate) {
				currentMoney = currentMoney - sushiObj.price
					return {
						...sushiObj,
						eaten: true
					}
			} else { 
				return sushiObj
			}
		})

		this.setState(prevState => ({
			...prevState,
			sushis: updatedSushiObjs,
			money: currentMoney
		})
	)}

	filterSushis = () => {
		let currentPage = this.state.currentPage
		let totalPages = 0
		
		if (this.state.sushis) {totalPages = (this.state.sushis.length/4 - 1)} 
		//if sushis is not divisible by 4 anymore then round the value of this.state.sushis.length/4

		if (currentPage > totalPages) {currentPage = 0}

		let filteredSushis = this.state.sushis.slice(currentPage*4, currentPage*4+4)

		return filteredSushis
	}

	handleMoreBtn = () => {
		if (this.state.currentPage >= 24) {
			this.setState({
				currentPage: 0
			})
		} else {
			this.setState({
				currentPage: this.state.currentPage + 1
			})
		}
	}

	eatenSushis = () => {
		return this.state.sushis.filter(sushiObj => sushiObj.eaten)
	}

	addMoneyToWallet = (e, inputValue) => {
		e.preventDefault()
		e.target.reset()
		this.setState(prevState => ({
			money: prevState.money + inputValue
		}))
	}

	render() {
		return (
			<div className="app">
				<div>
					<WalletForm addMoneyToWallet={this.addMoneyToWallet} />
				</div>
				<div>
					<SushiContainer 
						sushiObjs={this.filterSushis()} 
						eatSushi={this.eatSushi} 
						handleMoreBtn={this.handleMoreBtn}
						currentPage={this.state.currentPage}
					/>
					<Table money={this.state.money} eatenSushis={this.eatenSushis}/>
				</div>
			</div>
		)
	}
}

export default App;