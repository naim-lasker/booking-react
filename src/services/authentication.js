import { Config } from "../config/index"
import httpRequest from "../helpers/request"
import auth from "../helpers/auth"

const base_url = Config.base_url

/**
 * Method: POST
 * Login
 * @param {* email} email
 * @param {* valid password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const Login = (email, password, callback) => {
    return async (dispatch) => {
        const url = base_url + "/login"
        const body = {
            email,
            password,
        }

        dispatch({ type: "LOGIN_PENDING" })

        try {
            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "LOGIN_SUCCESS", payload: response })
            callback(response, null)

            if (response.data.status === "success") {
                auth.setUserInfo(response.data.data)
                return {
                    userInfo: response.data.data,
                }
            }
        } catch (error) {
            callback(null, error.response)
            console.log("LOGIN_ERROR--->", error)
        }
    }
}

/**
 * Method: POST
 * Provider SignIn
 * @param {* email} email
 * @param {* valid password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const ProviderSignIn = (
    firstName,
    lastName,
    email,
    password,
    callback
) => {
    return async (dispatch) => {
        const url = base_url + "/provider_register"
        const body = {
            role: 1,
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        }

        dispatch({ type: "PROVIDER_SIGNIN_PENDING" })

        try {
            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "PROVIDER_SIGNIN_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("PROVIDER_SIGNIN_ERROR--->", error)
        }
    }
}

/**
 * Method: POST
 * User SignIn
 * @param {* email} email
 * @param {* valid password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const UserSignIn = (
    firstName,
    lastName,
    email,
    password,
    callback
) => {
    return async (dispatch) => {
        const url = base_url + "/new_register"
        const body = {
            role: 2,
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        }

        dispatch({ type: "USER_SIGNIN_PENDING" })

        try {
            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "USER_SIGNIN_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("USER_SIGNIN_ERROR--->", error)
        }
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
