import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 */
export const getProviderProfileInfo = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/edit_store/" + providerInfo.id

            dispatch({ type: "PROFILE_INFO_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "PROFILE_INFO_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error)
            console.log("PROFILE_INFO_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 */
export const updateProviderProfileInfo = (providerObj, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                icon_image_path: providerObj.storeImg,
                first_name: providerObj.firstName,
                last_name: providerObj.lastName,
                mobile: providerObj.phoneNumber,
                country: providerObj.country,
                address: providerObj.address,
                about_com: providerObj.about,
                user_id: providerInfo.id,
            }

            const api = base_url + "/update_store/" + providerInfo.id

            dispatch({ type: "UPDATE_STORE_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "UPDATE_STORE_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("UPDATE_STORE_ERROR--->", error.response)
        }
    }
}

/**
 * Method: GET
 */
export const getUserProfileInfo = (callback) => {
    return async (dispatch) => {
        try {
            const userInfo = await auth.getUserInfo()
            const token = userInfo.token

            const api = base_url + "/get_user_profile_details/" + userInfo.id

            dispatch({ type: "PROFILE_INFO_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "PROFILE_INFO_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error)
            console.log("PROFILE_INFO_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 */
export const updateUserProfileInfo = (userObj, callback) => {
    return async (dispatch) => {
        try {
            const userInfo = await auth.getUserInfo()
            const token = userInfo.token

            const body = {
                icon_image_path: userObj.storeImg,
                first_name: userObj.firstName,
                last_name: userObj.lastName,
                email: userObj.email,
                mobile: userObj.phoneNumber,
                country: userObj.country,
                address: userObj.address,
                user_id: userInfo.id,
            }

            const api = base_url + "/update_user_profile_details/" + userInfo.id

            dispatch({ type: "UPDATE_STORE_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "UPDATE_STORE_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("UPDATE_STORE_ERROR--->", error.response)
        }
    }
}
