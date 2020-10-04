import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} callback
 */
export const getServiceCategoryList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_service_category"

            dispatch({ type: "SERVICE_CATEGORY_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "SERVICE_CATEGORY_LIST_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("SERVICE_CATEGORY_LIST_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} categoryName
 * @param {*} callback
 */
export const addServiceCategoy = (categoryName, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                category_name: categoryName,
                user_id: providerInfo.id,
            }

            const api = base_url + "/create_service_category"

            dispatch({ type: "CREATE_SERVICE_CATEGORY_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({
                type: "CREATE_SERVICE_CATEGORY_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("CREATE_SERVICE_CATEGORY_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} categoryName
 * @param {*} categoryId
 * @param {*} callback
 */
export const updateServiceCategoy = (categoryId, categoryName, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                category_name: categoryName,
                user_id: providerInfo.id,
            }

            const api = base_url + "/update_service_category/" + categoryId

            dispatch({ type: "UPDATE_SERVICE_CATEGORY_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({
                type: "UPDATE_SERVICE_CATEGORY_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("UPDATE_SERVICE_CATEGORY_ERROR--->", error.response)
        }
    }
}

/**
 * Method: DELETE
 * @param {*} categoryId
 * @param {*} callback
 */
export const deleteServiceCategoy = (categoryId, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/delete_service_category/" + categoryId

            dispatch({ type: "DELETE_SERVICE_CATEGORY_PENDING", api })
            const response = await httpRequest.delete(api, true, token)

            dispatch({
                type: "DELETE_SERVICE_CATEGORY_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("DELETE_SERVICE_CATEGORY_ERROR--->", error.response)
        }
    }
}
