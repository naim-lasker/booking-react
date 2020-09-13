import { Config } from '../config/index'
import httpRequest from '../helpers/request'

const base_url = Config.base_url


/**
 * Method: GET
 * access_token from reducer state by using getState() function
 * @param {*} merchantId
 * @param {*} page
 * @param {*} perPage
 * @param {*} callback
 */
export const getNotifications = (merchantId, page, perPage, callback) => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/auth/merchants-notifications/' + merchantId + '?&page=' + page + '&per_page=' + perPage

            dispatch({ type: 'NOTIFICATION_LIST_PENDING', api })
            const response = await httpRequest.get(api, true, access_token)

            dispatch({ type: 'NOTIFICATION_LIST_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('NOTIFICATION_LIST_ERROR--->', error.response)
        }
    }
}