import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: POST
 * @param {*} youtubeLink
 * @param {*} email
 * @param {*} phoneNumber
 * @param {*} companyName
 * @param {*} address
 * @param {*} about
 * @param {*} callback
 */
export const createProviderstore = (
    avatar,
    youtubeLink,
    email,
    phoneNumber,
    companyName,
    address,
    about,
    serviceCategoryId,
    callback
) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                icon_image_path: avatar,
                youtube_link: youtubeLink,
                email: email,
                phone_no: phoneNumber,
                company_name: companyName,
                address: address,
                about_com: about,
                service_category_id: serviceCategoryId,
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

/**
 * Method: GET
 */
export const getCustomerMenuList = (callback) => {
    return async (dispatch) => {
        try {
            const userInfo = await auth.getUserInfo()
            const token = userInfo.token

            const api = base_url + "/get_all_restuarants_stores"

            dispatch({ type: "MENU_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({ type: "MENU_LIST_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("MENU_LIST_ERROR--->", error.response)
        }
    }
}
