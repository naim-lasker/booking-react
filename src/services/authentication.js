import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: POST
 * Provider Sign In
 * @param {* email} email
 * @param {* password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const providerSignIn = (email, password, callback) => {
    return async (dispatch) => {
        try {
            const url = base_url + "/login"
            const body = {
                email,
                password,
            }

            dispatch({ type: "PROVIDER_SIGN_IN_PENDING" })

            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "PROVIDER_SIGN_IN_SUCCESS", payload: response })
            callback(response, null)

            if (response.data.status === "success") {
                return response.data.data
            }
        } catch (error) {
            callback(null, error.response)
            console.log("PROVIDER_SIGN_IN_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * Provider Sign Up
 * @param {* email} firstName
 * @param {* lastName} lastName
 * @param {* email} email
 * @param {* password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const providerSignUp = (
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

        dispatch({ type: "PROVIDER_SIGN_UP_PENDING" })

        try {
            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "PROVIDER_SIGN_UP_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("PROVIDER_SIGN_UP_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * User Sign In
 * @param {* email} email
 * @param {* password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const userSignIn = (email, password, callback) => {
    return async (dispatch) => {
        try {
            const url = base_url + "/login"
            const body = {
                email,
                password,
            }

            dispatch({ type: "USER_SIGN_IN_PENDING" })

            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "USER_SIGN_IN_SUCCESS", payload: response })
            callback(response, null)

            if (response.data.status === "success") {
                return response.data.data
            }
        } catch (error) {
            callback(null, error.response)
            console.log("USER_SIGN_IN_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * User Sign Up
 * @param {* email} firstName
 * @param {* lastName} lastName
 * @param {* email} email
 * @param {* password} password
 * @param {*is function that return reponse data or err in promise} callback
 */

export const userSignUp = (firstName, lastName, email, password, callback) => {
    return async (dispatch) => {
        const url = base_url + "/new_register"
        const body = {
            role: 2,
            first_name: firstName,
            last_name: lastName,
            email,
            password,
        }

        dispatch({ type: "USER_SIGN_UP_PENDING" })

        try {
            const response = await httpRequest.post(url, false, null, body)
            dispatch({ type: "USER_SIGN_UP_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("USER_SIGN_UP_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
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

/**
 * Method: POST
 */

export const updatePassword = (userId, password, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            let api = base_url + "/change_password/" + userId
            let body = {
                password,
            }

            dispatch({ type: "PASSWORD_UPDATE_PENDING", api, body })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "PASSWORD_UPDATE_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
        }
    }
}
