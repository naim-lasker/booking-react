import { Config } from '../config/index'
import auth from '../helpers/auth'
import httpRequest from '../helpers/request'

const base_url = Config.base_url


/**
 * Method: GET
 * @param {*} bankAccountName
 * @param {*} iban
 * @param {*} bankName
 * @param {*} swiftBic
 * @param {*} callback
 */
export const addProviderAccountDetails = (bankAccountName, iban, bankName, swiftBic, callback) => {
    // const userInfo = auth.getUserInfo()

    return async (dispatch) => {
        const body = {
            bank_account_name: bankAccountName,
            iban: iban,
            bank_name: bankName,
            swift_bic: swiftBic,
            user_id: 1,
        }

        try {
            // const token = userInfo.token

            // console.log('userInfo', userInfo);
            // console.log('token', token);

            const api = base_url + '/add_bank_account'

            dispatch({ type: 'ADD_ACCOUNT_DETAILS_PENDING', api })
            const response = await httpRequest.post(api, false, null, body)

            dispatch({ type: 'ADD_ACCOUNT_DETAILS_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('ADD_ACCOUNT_DETAILS_ERROR--->', error.response)
        }
    }
}