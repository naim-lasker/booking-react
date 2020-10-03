import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} bankAccountName
 * @param {*} iban
 * @param {*} bankName
 * @param {*} swiftBic
 * @param {*} callback
 */
export const addProviderAccountDetails = (
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

/**
 * Method: GET
 * @param {*} bankAccountName
 * @param {*} iban
 * @param {*} bankName
 * @param {*} swiftBic
 * @param {*} callback
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

            console.log('userInfo', userInfo);

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
