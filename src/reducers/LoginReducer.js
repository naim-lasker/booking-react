const INITIAL_STATE = {
    login: {},
}

export const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                login: action.payload,
            }
        default:
            return state
    }
}
