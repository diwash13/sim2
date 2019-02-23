const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
}
const UPDATE_NAME = 'UPDATE_NAME_TYPE'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS_TYPE'
const UPDATE_CITY = 'UPDATE_CITY_TYPE'
const UPDATE_STATE = 'UPDATE_STATE_TYPE'
const UPDATE_ZIP = 'UPDATE_ZIP_TYPE'

export default function reducer( state = initialState, action ) {
    switch(action.type) {
        
        case UPDATE_NAME:
            return Object.assign( {}, state, {name: action.payload})

        case UPDATE_ADDRESS:
            return Object.assign( {}, state, {address: action.payload})

        case UPDATE_CITY:
        return Object.assign( {}, state, {city: action.payload})

        case UPDATE_STATE:
        return Object.assign( {}, state, {state: action.payload})

        case UPDATE_ZIP:
        return Object.assign( {}, state, {zip: action.payload})

        default: return state
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}