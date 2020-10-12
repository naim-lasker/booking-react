import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} callback
 */
export const getProviderServiceList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_service"

            dispatch({ type: "SERVICE_LIST_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "SERVICE_LIST_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("SERVICE_LIST_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} service_category_id
 * @param {*} service_name
 * @param {*} overview
 * @param {*} additional_info
 * @param {*} selling_price
 * @param {*} vat
 * @param {*} discount_status
 * @param {*} discount_amount
 * @param {*} time_duration
 * @param {*} age_limit
 * @param {*} callback
 */
export const addProviderService = (service, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                service_category_id: service.categoryId,
                service_name: service.serviceName,
                overview: service.overview,
                additional_info: service.additionalInfo,
                selling_price: service.sellingPrice,
                vat: service.vat,
                discount_status: service.discountStatus,
                discount_amount: service.discountAmount,
                time_duration: service.timeDuration,
                age_limit: service.ageLimit,
                user_id: providerInfo.id,
            }

            const api = base_url + "/add_service"

            dispatch({ type: "ADD_SERVICE_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "ADD_SERVICE_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("ADD_SERVICE_ERROR--->", error.response)
        }
    }
}
