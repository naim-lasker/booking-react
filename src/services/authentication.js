import { Config } from "../config/index"
import httpRequest from "../helpers/request"
import auth from "../helpers/auth"

const base_url = Config.base_url

/**
 * Method: POST
 * Login
 * @param {* user email name} email
 * @param {* user valid password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const Login = (email, password, callback) => {
    return async (dispatch) => {
        dispatch({ type: "LOGIN_PENDING" })

        try {
            const response = await login(email, password)
            dispatch({ type: "LOGIN_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("LOGIN_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} email
 * @param {*} password
 */

const login = async (email, password) => {
    const url = base_url + "/login"
    const body = {
        password,
        email,
    }

    const response = await httpRequest.post(url, false, null, body)

    console.log("response", response)

    if (response.data.status === "success") {
        auth.setToken("token", response.data.data.token)
        return {
            token: response.data.data.token,
        }
    } else {
        throw Error("login failed")
    }
}

/**
 * Method: POST
 * logout
 * @param {*is function that return reponse data or err in promise} callback
 */

export const Logout = (callback) => {
    return async (dispatch, getState) => {
        try {
            const token = getState().auth.login.access_token
            let api = base_url + "/auth/logout"
            let body = {}

            dispatch({ type: "LOGOUT_PENDING", api, body })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "LOGOUT_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
        }
    }
}
