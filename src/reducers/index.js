import { combineReducers } from "redux"

import { LoginReducer } from "./LoginReducer"
// import { reducer as network } from 'react-native-offline'


const appReducers = combineReducers({
    auth: LoginReducer,
})

const reducers = (state, action) => {
    if (action.type === "FLAG") {
        state.flag = action.payload
    }
    return appReducers(state, action)
}

export default reducers