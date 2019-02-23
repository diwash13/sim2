import React , {Component} from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'



class StepOne extends Component {
    constructor() {
        super()
        this.state = {
            houses: [],
            name: '',
            address: '',
            city: '',
            states: '',
            zip: ''
        }
        
    }

    handleChangeName(val) {
        this.setState({
            name: val
        })
    }

    handleChangeAddress(val) {
        this.setState({
            address: val
        })
    }

    handleChangeCity(val) {
        this.setState({
            city: val
        })
    }

    handleChangeState(val) {
        this.setState({
            state: val
        })
    }

    handleChangeZip(val) {
        this.setState({
            zip: val
        })
    }

    

    render() {
        
        return (
            <div>
                Wizard
                <input 
                type="text" 
                placeholder="Property Name" 
                onChange={e => this.handleChangeName(e.target.value)}
                value={this.state.name}
                />
                <input 
                type="text" 
                placeholder="Address" 
                onChange={e => this.handleChangeAddress(e.target.value)}
                value={this.state.address}
                />
                <input 
                type="text" 
                placeholder="City" 
                onChange={e => this.handleChangeCity(e.target.value)}
                value={this.state.city}
                />
                <input 
                type="text" 
                placeholder="State" 
                onChange={e => this.handleChangeState(e.target.value)}
                value={this.state.state}
                />
                <input 
                type="text" 
                placeholder="ZipCode"
                onChange={e => this.handleChangeZip(e.target.value)}
                value={this.state.zip}
                />
                <Link to='/sTwo'><button>Next Step</button></Link>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const {name, address, city, states, zip} = state

    return {
        name,
        address,
        city, 
        states, 
        zip
    }
}

export default connect( mapStateToProps)(StepOne)