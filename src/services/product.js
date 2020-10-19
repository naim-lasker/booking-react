import { Config } from "../config/index"
import auth from "../helpers/auth"
import httpRequest from "../helpers/request"

const base_url = Config.base_url

/**
 * Method: GET
 * @param {*} callback
 */
export const getProviderProductList = (callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/get_products/" + providerInfo.id

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

/**
 * Method: POST
 * @param {*} product_name
 * @param {*} overview
 * @param {*} additional_info
 * @param {*} selling_price
 * @param {*} vat
 * @param {*} quantity_in_stock
 * @param {*} discount_status
 * @param {*} discount_amount
 * @param {*} discount_percentage
 * @param {*} availability_status
 * @param {*} availability_from
 * @param {*} availability_to
 * @param {*} is_service
 * @param {*} product_image
 * @param {*} callback
 */
export const addProviderProduct = (product, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                product_image: product.productImage,
                product_name: product.productName,
                overview: product.overview,
                additional_info: product.additionalInfo,
                selling_price: product.sellingPrice,
                vat: product.vat,
                quantity_in_stock: product.quantityInStock,
                discount_status: product.discountStatus,
                discount_amount: product.discountAmount,
                discount_percentage: product.discountPercentage,
                availability_status: product.availabilityStatus,
                availability_from: product.availabilityFrom,
                availability_to: product.availabilityTo,
                is_service: product.isService,
                user_id: providerInfo.id,
            }

            const api = base_url + "/add_product"

            dispatch({ type: "ADD_PRODUCT_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "ADD_PRODUCT_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("ADD_PRODUCT_ERROR--->", error.response)
        }
    }
}

/**
 * Method: POST
 * @param {*} product_name
 * @param {*} overview
 * @param {*} additional_info
 * @param {*} selling_price
 * @param {*} vat
 * @param {*} quantity_in_stock
 * @param {*} discount_status
 * @param {*} discount_amount
 * @param {*} discount_percentage
 * @param {*} availability_status
 * @param {*} availability_from
 * @param {*} availability_to
 * @param {*} is_service
 * @param {*} product_image
 * @param {*} callback
 */
export const editProviderProduct = (product, productId, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                product_image: product.productImage,
                product_name: product.productName,
                overview: product.overview,
                additional_info: product.additionalInfo,
                selling_price: product.sellingPrice,
                vat: product.vat,
                quantity_in_stock: product.quantityInStock,
                discount_status: product.discountStatus,
                discount_amount: product.discountAmount,
                discount_percentage: product.discountPercentage,
                availability_status: product.availabilityStatus,
                availability_from: product.availabilityFrom,
                availability_to: product.availabilityTo,
                is_service: product.isService,
                user_id: providerInfo.id,
            }

            const api = base_url + "/update_product/" + productId

            dispatch({ type: "UPDATE_PRODUCT_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("UPDATE_PRODUCT_ERROR--->", error.response)
        }
    }
}


/**
 * Method: POST
 * @param {*} product_id
 * @param {*} callback
 */
export const deleteProviderProduct = (productId, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token


            const api = base_url + "/delete_product/" + productId

            dispatch({ type: "DELETE_PRODUCT_PENDING", api })
            const response = await httpRequest.delete(api, true, token)

            dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("DELETE_PRODUCT_ERROR--->", error.response)
        }
    }
}


/**
 * Method: GET
 * @param {*} callback
 */
export const getProviderProductDetails = (productId, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const api = base_url + "/edit_product/" + productId

            dispatch({ type: "PRODUCT_DETAILS_PENDING", api })
            const response = await httpRequest.get(api, true, token)

            dispatch({
                type: "PRODUCT_DETAILS_SUCCESS",
                payload: response,
            })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("PRODUCT_DETAILS_ERROR--->", error.response)
        }
    }
}


/**
 * Method: POST
 * @param {*} quantity_stock
 * @param {*} callback
 */
export const addProviderProductQuantity = (quantityStock, callback) => {
    return async (dispatch) => {
        try {
            const providerInfo = await auth.getProviderInfo()
            const token = providerInfo.token

            const body = {
                quantity_stock: quantityStock,
                user_id: providerInfo.id,
            }

            const api = base_url + "/update_product_quantity"

            dispatch({ type: "ADD_PRODUCT_QUANTITY_PENDING", api })
            const response = await httpRequest.post(api, true, token, body)

            dispatch({ type: "ADD_PRODUCT_QUANTITY_SUCCESS", payload: response })
            callback(response, null)
        } catch (error) {
            callback(null, error.response)
            console.log("ADD_PRODUCT_QUANTITY_ERROR--->", error.response)
        }
    }
}
