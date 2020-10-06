import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url


/**
 * Method: GET
 * @param {*} callback
 */
export const getProductList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_products"

            dispatch({ type: "PRODUCT_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "PRODUCT_LIST_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("PRODUCT_LIST_ERROR--->", error.response)
        }
    }
}