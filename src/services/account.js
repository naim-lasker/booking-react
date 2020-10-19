import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: POST
 */
export const addAccountDetails = (
    userType,
    bankAccountName,
    iban,
    bankName,
    swiftBic,
    callback
) => {
    return async (dispatch) => {
        try {
            let token = ""
            let providerInfo = {}
            let userInfo = {}
            if (userType == "provider") {
                providerInfo = auth.getProviderInfo()
                token = providerInfo.token
            } else if (userType == "user") {
                userInfo = auth.getUserInfo()
                token = userInfo.token
            }

            const body = {
                bank_account_name: bankAccountName,
                iban: iban,
                bank_name: bankName,
                swift_bic: swiftBic,
                user_id: providerInfo.id,
            }

            if (userType == "provider") {
                body.user_id = providerInfo.id
            } else if (userType == "user") {
                body.user_id = userInfo.id
            }

            const api = base_url + "/add-bank-account"

            dispatch({ type: "ADD_ACCOUNT_DETAILS_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "ADD_ACCOUNT_DETAILS_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("ADD_ACCOUNT_DETAILS_ERROR--->", error)
        }
    }
}

export const getProviderAccountDetails = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_bank_details/" + providerInfo.id

            dispatch({ type: "ACCOUNT_DETAILS_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "ACCOUNT_DETAILS_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error)
            console.log("ACCOUNT_DETAILS_ERROR--->", error.response)
        }
    }
}

export const updateProviderAccountDetails = (
    bankAccountName,
    iban,
    bankName,
    swiftBic,
    callback
) => {
    return async (dispatch) => {
        try {
            const providerInfo = auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                bank_account_name: bankAccountName,
                iban: iban,
                bank_name: bankName,
                swift_bic: swiftBic,
                user_id: providerInfo.id,
            }

            const api = base_url + "/update_bank_details/" + providerInfo.id

            dispatch({ type: "UPDATE_ACCOUNT_DETAILS_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({
                type: "UPDATE_ACCOUNT_DETAILS_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("UPDATE_ACCOUNT_DETAILS_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 */
export const addUserAccountDetails = (
    bankAccountName,
    iban,
    bankName,
    swiftBic,
    callback
) => {
    return async (dispatch) => {
        try {
            const userInfo = auth.getUserInfo()
            const token = userInfo.token

            const body = {
                bank_account_name: bankAccountName,
                iban: iban,
                bank_name: bankName,
                swift_bic: swiftBic,
                user_id: userInfo.id,
            }

            console.log("userInfo", userInfo)

            const api = base_url + "/add-bank-account"

            dispatch({ type: "ADD_ACCOUNT_DETAILS_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "ADD_ACCOUNT_DETAILS_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("ADD_ACCOUNT_DETAILS_ERROR--->", error.response)
        }
    }
}
