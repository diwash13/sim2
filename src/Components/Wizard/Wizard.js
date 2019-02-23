import React , {Component} from 'react'

import { Link, Route } from 'react-router-dom'



export default class Dashboard extends Component {
    constructor() {
        super()
        
    }

    
    render() {
        return (
            <div>
                Wizard
                <Link to='/sOne'><button>Next Step</button></Link>
                <Link to='/'><button>Cancel</button></Link>
                
            </div>
        )
    }
}