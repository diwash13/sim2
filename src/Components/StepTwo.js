import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class StepTwo extends Component {
    constructor() {
        super()
        this.state = {
            image: ''
        }
    }
    handleChangeImage(val) {
        this.setState({
            image: val
        })
    }

    render() {
        return (
            <div>
                Image URl
                <input 
                    type="url" 
                    onChange={e => this.handleChangeImage(e.target.value)}
                    value={this.state.image}
                />
                <button>Previous Step</button>
                <Link to='/sThree'><button>Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {image} = state
    return {
        image
    }
}

export default connect(mapStateToProps)(StepTwo)