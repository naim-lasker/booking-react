import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PhoneInput from "react-phone-number-input"
import { withRouter } from "react-router-dom"
import { useFileInput, useInput } from "../../../../helpers/common"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"
import { InputLabel } from "../../../UI/InputLabel"
import {
    getProviderProfileInfo,
    updateProviderProfileInfo,
} from "../../../../services/profile"
import { notify } from "../../../../helpers/ui"
import auth from "../../../../helpers/auth"
import { TextareaWithLabel } from "../../../UI/TextareaField"
import { CustomLoader } from "../../../UI/Loader"
import { CustomAlert } from "../../../UI/SweetAlert"

const MainForm = () => {
    const dispatch = useDispatch()
    const [storeImg, handleStoreImg, setStoreImg] = useFileInput("")
    const [firstName, handleFirstName, setFirstName] = useInput("")
    const [lastName, handleLastName, setLastName] = useInput("")
    const [country, handleCountry, setCountry] = useInput("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, handleAddress, setAddress] = useInput("")
    const [about, handleAbout, setAbout] = useInput("")
    const [getLoading, setGetLoading] = useState(true)
    const [updateLoading, setUpdateLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)

    const providerInfo = auth.getProviderInfo()

    useEffect(() => {
        const getProfileInfo = async () => {
            dispatch(
                getProviderProfileInfo(providerInfo.id, (res, err) => {
                    setGetLoading(false)
                    if (res && res.data) {
                        setInputValue(res.data)
                    } else if (err) {
                        notify("error", "Something went wrong")
                    }
                })
            )
        }

        getProfileInfo()
    }, [])

    const setInputValue = (response) => {
        setStoreImg(
            response.storeDetails.store_image &&
                response.storeDetails.store_image != ""
                ? response.storeDetails.store_image
                : "/images/placeholder/avatar.png"
        )
        setFirstName(
            response.UserDetails.first_name
                ? response.UserDetails.first_name
                : ""
        )
        setLastName(
            response.UserDetails.last_name ? response.UserDetails.last_name : ""
        )
        setCountry(
            response.UserDetails.country ? response.UserDetails.country : ""
        )
        setPhoneNumber(
            response.storeDetails.phone_no ? response.storeDetails.phone_no : ""
        )
        setAddress(
            response.storeDetails.address ? response.storeDetails.address : ""
        )
        setAbout(
            response.storeDetails.about_com
                ? response.storeDetails.about_com
                : ""
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const providerObj = {
            storeImg,
            firstName,
            lastName,
            phoneNumber,
            country,
            address,
            about,
        }

        dispatch(
            updateProviderProfileInfo(providerObj, (res, err) => {
                console.log("res", res)
                console.log("err", err)
                setUpdateLoading(false)

                if (res && res.data && res.data.status === "success") {
                    setMessage(res.data.data)
                    setAlert(true)
                } else if (err) {
                    return notify("error", "Please check all the fields")
                }
            })
        )
    }

    return !getLoading ? (
        <Fragment>
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={() => setAlert(false)}
            />

            <form onSubmit={handleSubmit}>
                <div className='row justify-content-center mb-5'>
                    <div className='col-lg-8'>
                        <div className='d-flex justify-content-center mb-5'>
                            <label
                                htmlFor='imageInput'
                                className='profile-pic-outer mr-5'
                            >
                                <div className='profile-pic-inner'>
                                    <input
                                        id='imageInput'
                                        type='file'
                                        className='d-none'
                                        accept='image/gif, image/jpg, image/jpeg, image/png'
                                        alt=''
                                        onChange={handleStoreImg}
                                    />
                                    <img
                                        className='w-100 h-100 rounded-circle'
                                        src={
                                            storeImg
                                                ? storeImg
                                                : "/images/placeholder/avatar.png"
                                        }
                                        alt=''
                                    />
                                    <div className='camera-icon'>
                                        <img
                                            src='/images/icons/camera.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </label>
                            <button className='question-icon'>?</button>
                        </div>

                        <div className='form-container'>
                            <CustomInput
                                required
                                showLabel
                                label='First Name'
                                id='firstName'
                                infoText='First Name info'
                                placeholder='Lora'
                                value={firstName}
                                onChange={handleFirstName}
                            />

                            <CustomInput
                                required
                                showLabel
                                label='Last Name'
                                id='lastName'
                                infoText='Last Name info'
                                placeholder='Jones'
                                value={lastName}
                                onChange={handleLastName}
                            />

                            <CustomInput
                                required
                                showLabel
                                label='Country'
                                id='country'
                                infoText='Country info'
                                placeholder='lora.king@gmail.com'
                                value={country}
                                onChange={handleCountry}
                            />

                            <div className='mb-4'>
                                <InputLabel
                                    label='Phone Number'
                                    id='phoneNumber'
                                    infoText='Phone Number info'
                                />

                                <PhoneInput
                                    required
                                    className='form-control input-box'
                                    placeholder='Number while on holiday'
                                    value={phoneNumber}
                                    onChange={(number) =>
                                        setPhoneNumber(number)
                                    }
                                />
                            </div>

                            <CustomInput
                                required
                                showLabel
                                label='Company Address'
                                id='companyAddress'
                                infoText='Company Address info'
                                placeholder='London'
                                value={address}
                                onChange={handleAddress}
                            />

                            <TextareaWithLabel
                                required
                                rows='4'
                                maxLength='90'
                                label='About Your Company'
                                id='aboutYourCompany'
                                infoText='About Your Company info'
                                placeholder='It is Our Company'
                                value={about}
                                onChange={handleAbout}
                            />

                            <div className='d-flex justify-content-center'>
                                <a
                                    href='/provider-product-list'
                                    className='gradient-btn gradient-lime mr-4'
                                >
                                    Cancel
                                </a>
                                <SubmitButton
                                    blue={true}
                                    text='Edit profile'
                                    loading={updateLoading}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    ) : (
        <div className='row justify-content-center'>
            <div className='col-lg-8 border rounded mb-4'>
                <CustomLoader />
            </div>
        </div>
    )
}

export default withRouter(MainForm)
