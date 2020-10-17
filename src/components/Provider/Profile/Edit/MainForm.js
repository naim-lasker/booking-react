import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PhoneInput from "react-phone-number-input"
import { withRouter } from "react-router-dom"
import { useFileInput, useInput } from "../../../../helpers/common"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"
import { InputLabel } from "../../../UI/InputLabel"
import { getProviderProfileInfo } from "../../../../services/profile"
import { notify } from "../../../../helpers/ui"
import auth from "../../../../helpers/auth"
import { TextareaWithLabel } from "../../../UI/TextareaField"
import { CustomLoader } from "../../../UI/Loader"

const MainForm = () => {
    const dispatch = useDispatch()
    const [avatar, handleAvatar, setAvatar] = useFileInput("")
    const [fullName, handleFullName, setFullName] = useInput("")
    const [email, handleEmail, setEmail] = useInput("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [companyName, handleCompanyName, setCompanyName] = useInput("")
    const [about, handleAbout, setAbout] = useInput("")
    const [getLoading, setGetLoading] = useState(true)
    const [updateLoading, setUpdateLoading] = useState(false)

    const providerInfo = auth.getProviderInfo()

    useEffect(() => {
        const getProfileInfo = async () => {
            dispatch(
                getProviderProfileInfo(providerInfo.id, (res, err) => {
                    setGetLoading(false)
                    if (res && res.data) {
                        setInputValue(res.data.data)
                    } else if (err) {
                        notify("error", "Something went wrong")
                    }
                })
            )
        }

        getProfileInfo()
    }, [])

    const setInputValue = (response) => {
        setEmail(response.email)
        setPhoneNumber(response.phone_no)
        setCompanyName(response.company_name)
        setAbout(response.about_com)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        return
    }

    return !getLoading ? (
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
                            type='text'
                            label='Full Name'
                            id='fullName'
                            infoText='Full Name link info'
                            placeholder='Lora Jones'
                            value={fullName}
                            onChange={handleFullName}
                        />

                        <CustomInput
                            required
                            showLabel
                            type='email'
                            label='Email'
                            id='email'
                            infoText='Email info'
                            placeholder='lora.king@gmail.com'
                            value={email}
                            onChange={handleEmail}
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
                                onChange={(number) => setPhoneNumber(number)}
                            />
                        </div>

                        <CustomInput
                            required
                            showLabel
                            label='Country of Origin'
                            id='companyName'
                            infoText='Country of Origin info'
                            placeholder='What country are you from'
                            value={companyName}
                            onChange={handleCompanyName}
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
    ) : (
        <div className='row justify-content-center'>
            <div className='col-lg-8 border rounded mb-4'>
                <CustomLoader />
            </div>
        </div>
    )
}

export default withRouter(MainForm)
