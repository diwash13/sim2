import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

class StepThree extends Component {
    constructor() {
        super()
        this.state = {
            mortgage: '',
            rent: ''
        }
        this.createListing = this.createListing.bind(this)
    }
    handleChnageMortgage(val) {
        this.setState({
            mortgage: val
        })
    }

    handleChangeRent(val) {
        this.setState({
            rent: val
        })
    }


    createListing() {
        axios.post('api/listing').then(response => {
            this.setState({
                houses: response.data
            })
        })
    }

    render() {
        return (
            <div>
                Monthly Mortgage Amount
                <input
                    type="text"
                    placeholder="0"
                    onChange={e => this.handleChnageMortgage(e.target.value)}
                    value={this.state.mortgage}
                />
                <input
                    type="text"
                    placeholder="0"
                    onChange={e => this.handleChangeRent(e.target.value)}
                    value={this.state.rent}
                />
                <button onClick={() => this.createListing} >Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {mortgage, rent} = state
    return {
        mortgage,
        rent
    }
}

export default connect(mapStateToProps)(StepThree)