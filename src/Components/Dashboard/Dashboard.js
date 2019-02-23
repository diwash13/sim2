import React , {Component} from 'react'
import axios from 'axios'
import House from '../House/House'
import { Link } from 'react-router-dom'


export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
        this.getListing = this.getListing.bind(this)
        this.deleteListing = this.deleteListing.bind(this)
    }
    componentDidMount() {
        this.getListing()
        this.deleteListing()
    }

    getListing() {
        axios.get('/api/listing').then(response => {
            this.setState({
                houses: response.data
            })
        })
    }

    deleteListing(id) {
        axios.delete('/api/listing/$id').then(response => {
            this.setState({
                houses: response.data.houses
            })
        })
    }

    render() {
       if(!this.state.houses) {
           return null
       }
        const mappedHouses = this.state.houses.map(h => <House house = {h} /> )
        return (

            <div>
                { mappedHouses }
                <Link to='/wizard'><button>Add New Property</button></Link>
            </div>
        )
    }
}