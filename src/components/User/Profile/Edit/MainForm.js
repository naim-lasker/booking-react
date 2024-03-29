import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PhoneInput from "react-phone-number-input"
import { withRouter } from "react-router-dom"
import { useFileInput, useInput } from "../../../../helpers/common"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"
import { InputLabel } from "../../../UI/InputLabel"
import {
    getUserProfileInfo,
    updateUserProfileInfo,
} from "../../../../services/profile"
import { notify } from "../../../../helpers/ui"
import { TextareaWithLabel } from "../../../UI/TextareaField"
import { CustomLoader } from "../../../UI/Loader"
import { CustomAlert } from "../../../UI/SweetAlert"

const MainForm = () => {
    const dispatch = useDispatch()
    const [avatar, handleAvatar, setAvatar] = useFileInput("")
    const [firstName, handleFirstName, setFirstName] = useInput("")
    const [lastName, handleLastName, setLastName] = useInput("")
    const [email, handleEmail, setEmail] = useInput("")
    const [country, handleCountry, setCountry] = useInput("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [getLoading, setGetLoading] = useState(true)
    const [updateLoading, setUpdateLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)


    useEffect(() => {
        const getProfileInfo = async () => {
            dispatch(
                getUserProfileInfo((res, err) => {
                    setGetLoading(false)
                    if (res && res.data) {
                        setInputValue(res.data)
                    } else if (err) {
                        console.log('err', err);
                        notify("error", "Something went wrong")
                    }
                })
            )
        }

        getProfileInfo()
    }, [])

    const setInputValue = (response) => {
        setAvatar(
            response.UserDetails.icon_image_path &&
                response.UserDetails.icon_image_path != ""
                ? response.UserDetails.icon_image_path
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
        setEmail(
            response.UserDetails.email ? response.UserDetails.email : ""
        )
        setCountry(
            response.UserDetails.country ? response.UserDetails.country : ""
        )
        setPhoneNumber(
            response.UserDetails.mobile ? response.UserDetails.mobile : ""
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setUpdateLoading(true)

        const userObj = {
            avatar,
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
        }

        dispatch(
            updateUserProfileInfo(userObj, (res, err) => {
                console.log("res", res)
                console.log("err", err)
                setUpdateLoading(false)

                if (res && res.data && res.data.status === "success") {
                    setMessage(res.data.data)
                    setAlert(true)
                } else if (err) {
                    return notify(
                        "error",
                        err.data && err.data.message
                            ? err.data.message
                            : "Please check all the fields"
                    )
                }
            })
        )
    }

    const onConfirm = () => {
        setAlert(false)
        window.location.href = "/user-edit-profile"
    }

    return !getLoading ? (
        <Fragment>
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={onConfirm}
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
                                        onChange={handleAvatar}
                                    />
                                    <img
                                        className='w-100 h-100 rounded-circle'
                                        src={
                                            avatar
                                                ? avatar
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
                                label='Email'
                                id='email'
                                infoText='Email info'
                                placeholder='Lora'
                                value={email}
                                onChange={handleEmail}
                            />

                            <CustomInput
                                showLabel
                                label='Country'
                                id='country'
                                infoText='Country info'
                                placeholder='Canada'
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
                                    className='form-control input-box'
                                    placeholder='Number while on holiday'
                                    value={phoneNumber}
                                    onChange={(number) =>
                                        setPhoneNumber(number)
                                    }
                                />
                            </div>

                            <div className='d-flex justify-content-center'>
                                <a
                                    href='/provider-booking'
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
