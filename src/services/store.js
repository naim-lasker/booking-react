import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} youtubeLink
 * @param {*} email
 * @param {*} phoneNumber
 * @param {*} companyName
 * @param {*} address
 * @param {*} about
 * @param {*} callback
 */
export const createProviderstore = (
    youtubeLink,
    email,
    phoneNumber,
    companyName,
    address,
    about,
    callback
) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                youtube_link: youtubeLink,
                email: email,
                phone_no: phoneNumber,
                company_name: companyName,
                address: address,
                about_com: about,
                user_id: providerInfo.id,
            }

            console.log("providerInfo", providerInfo)
            // console.log('token', token);

            const api = base_url + "/create_store"

            dispatch({ type: "CREATE_STORE_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "CREATE_STORE_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("CREATE_STORE_ERROR--->", error.response)
        }
    }
}

/**
 * Method: GET
 * @param {*} callback
 */
export const getCategoryList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            console.log("token", token)

            const api = base_url + "/get_service_category"

            dispatch({ type: "CATEGORY_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({ type: "CATEGORY_LIST_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("CATEGORY_LIST_ERROR--->", error.response)
        }
    }
}
