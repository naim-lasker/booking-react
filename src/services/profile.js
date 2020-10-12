import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} callback
 */
export const getProviderProfileInfo = (id, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/edit_store/" + id

            dispatch({ type: "PROFILE_INFO_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "PROFILE_INFO_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("PROFILE_INFO_ERROR--->", error.response)
        }
    }
}
