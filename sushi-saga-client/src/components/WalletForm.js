import React, {Component} from 'react'

export default class WalletForm extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: 0
        }
    }

    handleInput = (e) => {
        let deposit = parseInt(e.target.value, 10)
        if (isNaN(deposit)) {
            deposit = 0
        }
        this.setState({
            inputValue: deposit
        })
    }

    render () {
        return (
            <div className="add-money-to-wallet">
                <form onSubmit={(e) => this.props.addMoneyToWallet(e, this.state.inputValue)}>
                    <label>Enter Dollar Amount to Add to Wallet: </label>
                    <input type="number" value={this.state.inputValue} onChange={(e) => this.handleInput(e)}/>
                    <input type="submit" value="Add Money" />
                </form>
            </div>
        )
    }
}