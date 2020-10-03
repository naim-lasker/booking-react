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