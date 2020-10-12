import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} callback
 */
export const getMenuCategoryList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_res_menu_cat"

            dispatch({ type: "MENU_CATEGORY_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "MENU_CATEGORY_LIST_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("MENU_CATEGORY_LIST_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} categoryName
 * @param {*} callback
 */
export const addMenuCategory = (categoryName, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                category_name: categoryName,
                user_id: providerInfo.id,
            }

            const api = base_url + "/add_res_menu_cat"

            dispatch({ type: "CREATE_MENU_CATEGORY_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({
                type: "CREATE_MENU_CATEGORY_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("CREATE_MENU_CATEGORY_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} categoryName
 * @param {*} categoryId
 * @param {*} callback
 */
export const updateMenuCategory = (categoryId, categoryName, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                category_name: categoryName,
                user_id: providerInfo.id,
            }

            const api = base_url + "/update_res_menu_cat/" + categoryId

            dispatch({ type: "UPDATE_MENU_CATEGORY_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({
                type: "UPDATE_MENU_CATEGORY_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("UPDATE_MENU_CATEGORY_ERROR--->", error.response)
        }
    }
}

/**
 * Method: DELETE
 * @param {*} categoryId
 * @param {*} callback
 */
export const deleteMenuCategory = (categoryId, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/delete_res_menu_cat/" + categoryId

            dispatch({ type: "DELETE_MENU_CATEGORY_PENDING", api })
            const response = await httpRequest.delete(api, true, token)

            dispatch({
                type: "DELETE_MENU_CATEGORY_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("DELETE_MENU_CATEGORY_ERROR--->", error.response)
        }
    }
}



/**
 * Method: POST
 * @param {*} menu
 * @param {*} callback
 */
export const addProviderMenu = (menu, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                menu_category_id: menu.categoryId,
                menu_name: menu.menuName,
                overview: menu.overview,
                additional_info: menu.additionalInfo,
                selling_price: menu.sellingPrice,
                vat: menu.vat,
                discount_status: menu.discountStatus,
                discount_amount: menu.discountAmount,
                time_duration: menu.timeDuration,
                age_limit: menu.ageLimit,
                user_id: providerInfo.id,
            }

            const api = base_url + "/add_res_menu"

            dispatch({ type: "ADD_MENU_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "ADD_MENU_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("ADD_MENU_ERROR--->", error.response)
        }
    }
}

/**
 * Method: GET
 * @param {*} callback
 */
export const getProviderMenuList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_res_menu"

            dispatch({ type: "MENU_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "MENU_LIST_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("MENU_LIST_ERROR--->", error.response)
        }
    }
}


/**
 * Method: POST
 * @param {*} menuId
 * @param {*} callback
 */
export const deleteProviderMenu = (menuId, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/delete_res_menu/" + menuId

            dispatch({ type: "DELETE_MENU_PENDING", api })
            const response = await httpRequest.delete(api, true, token)

            dispatch({ type: "DELETE_MENU_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("DELETE_MENU_ERROR--->", error.response)
        }
    }
}
