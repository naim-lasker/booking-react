import { Config } from '../config/index'
import httpRequest from '../helpers/request'

const base_url = Config.base_url


/**
 * Method: GET
 * access_token from reducer state by using getState() function
 * @param {*} callback 
 */
export const getPersonalProfileInfo = callback => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/auth/user'

            dispatch({ type: 'PERSONAL_PROFILE_INFO_PENDING', api })
            const response = await httpRequest.get(api, true, access_token)

            dispatch({ type: 'PERSONAL_PROFILE_INFO_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('PERSONAL_PROFILE_ERROR--->', error.response)
        }
    }
}







/**
 * Method: POST
 * access_token from reducer state by using getState() function
 * @param {*} avatar 
 * @param {*} callback 
 */
export const updatePersonalMedia = (avatar, callback) => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/auth/profile/update/media'

            const formData = new FormData();
            formData.append('avatar', avatar)


            dispatch({ type: 'UPDATE_PERSONAL_AVATAR_PENDING', api, formData })
            const response = await httpRequest.post(api, true, access_token, formData)

            dispatch({ type: 'UPDATE_PERSONAL_AVATAR_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('UPDATE_PERSONAL_MEDIA_ERROR--->', error.response)
        }
    }
}








/**
 * Method: POST
 * access_token from reducer state by using getState() function
 * @param {*} states 
 * @param {*} callback 
 */
export const updatePersonalProfile = (states, callback) => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/auth/profile/update'

            const { first_name, last_name, contact_number, gender, password } = states

            const reqbody = {
                first_name: first_name,
                last_name: last_name,
                contact_number: contact_number,
                gender: gender,
                password: password,
            }

            dispatch({ type: 'UPDATE_PERSONAL_PROFILE_PENDING', api, reqbody })
            const response = await httpRequest.post(api, true, access_token, reqbody)

            dispatch({ type: 'UPDATE_PERSONAL_PROFILE_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('UPDATE_pERSONAL_PROFILE_ERROR--->', error.response)
        }
    }
}








/**
 * Method: GET
 * access_token from reducer state by using getState() function
 * @param {*} callback 
 */
export const getMerchantProfile = callback => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/merchant/details'

            dispatch({ type: 'MERCHANT_PROFILE_INFO_PENDING', api })
            const response = await httpRequest.get(api, true, access_token)

            dispatch({ type: 'MERCHANT_PROFILE_INFO_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('MERCHANT_PROFILE_ERROR--->', error.response)
        }
    }
}







/**
 * Method: GET
 * access_token from reducer state by using getState() function
 * @param {*} callback 
 */
export const updateMerchantAddress = callback => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/merchant/address'

            const reqbody = {
                name: name,
                email: email,
                contact_number: contact_number,
                address: address,
                district: district,
                zip_code: zip_code,
            }


            dispatch({ type: 'MERCHANT_ADDRESS_UPDATE_PENDING', api, reqbody })
            const response = await httpRequest.post(api, true, access_token, reqbody)

            dispatch({ type: 'MERCHANT_ADDRESS_UPDATE_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('UPDATE_MERCHANT_ADDRESS_ERROR--->', error.response)
        }
    }
}








/**
 * Method: POST
 * access_token from reducer state by using getState() function
 * @param {*} banner 
 * @param {*} callback 
 */
export const updateMerchantBanner = (banner, callback) => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/merchant/update/media'

            const formData = new FormData();
            formData.append('banner', banner)

            dispatch({ type: 'UPDATE_MERCHANT_BANNER_PENDING', api, formData })
            const response = await httpRequest.post(api, true, access_token, formData)

            dispatch({ type: 'UPDATE_MERCHANT_BANNER_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('UPDATE_MERCHANT_BANNER_ERROR--->', error.response)
        }
    }
}







/**
 * Method: POST
 * access_token from reducer state by using getState() function
 * @param {*} logo 
 * @param {*} callback 
 */
export const updateMerchantLogo = (logo, callback) => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token
            const api = base_url + '/merchant/update/media'

            const formData = new FormData();
            formData.append('logo', logo)

            dispatch({ type: 'UPDATE_MERCHANT_LOGO_PENDING', api, formData })
            const response = await httpRequest.post(api, true, access_token, formData)

            dispatch({ type: 'UPDATE_MERCHANT_LOGO_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('UPDATE_MERCHANT_LOGO_ERROR--->', error.response)
        }
    }
}









/**
 * Method: POST
 * access_token from reducer state by using getState() function
 * @param {*} states 
 * @param {*} callback 
 */
export const updateMerchantProfile = (states, callback) => {

    return async (dispatch, getState) => {
        try {
            const access_token = getState().auth.login.access_token

            const api = base_url + '/merchant/update'
            const {
                shop_name, tag_line, location_url, website, cash_voucher_permitted,
                contact_person, industry_id, password
            } = states

            const reqbody = {
                shop_name: shop_name,
                tag_line: tag_line,
                location_url: location_url,
                website: website,
                cash_voucher_permitted: cash_voucher_permitted,
                contact_person: contact_person,
                industry_id: industry_id,
                password: password,
            }

            dispatch({ type: 'UPDATE_MERCHANT_PROFILE_PENDING', api, reqbody })
            const response = await httpRequest.post(api, true, access_token, reqbody)

            dispatch({ type: 'UPDATE_MERCHANT_PROFILE_SUCCESS', payload: response })
            callback(response, null)

        } catch (error) {
            callback(null, error.response)
            console.log('UPDATE_MERCHANT_PROFILE_ERROR--->', error.response)
        }
    }
}