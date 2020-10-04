import React, { Fragment, useEffect, useState } from "react"
import Select from "react-select"
import { useDispatch } from "react-redux"
import PhoneInput from "react-phone-number-input"
import { withRouter } from "react-router-dom"
import { createProviderstore } from "../../../../services/store"
import { getServiceCategoryList } from "../../../../services/category"
import { useFileInput, useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { SubmitButton } from "../../../../components/UI/Button"
import { InputWithLabel } from "../../../../components/UI/InputField"
import { InputLabel } from "../../../../components/UI/InputLabel"
import { TextareaWithLabel } from "../../../../components/UI/TextareaField"
import { CustomAlert } from "../../../../components/UI/SweetAlert"
import auth from "../../../../helpers/auth"
import AccountModal from "./AccountModal"

const MainForm = () => {
    const dispatch = useDispatch()
    const providerInfo = auth.getProviderInfo()

    const [avatar, handleAvatar, setAvatar] = useFileInput({
        file: "",
        image: "",
    })
    const [youtubeLink, handleYoutubeLink, setYoutubeLink] = useInput("")
    const [category, setCategory] = useState([])
    const [categories, setCategories] = useState([])
    const [email, handleEmail, setEmail] = useInput(
        providerInfo ? providerInfo.email : ""
    )
    const [phoneNumber, setPhoneNumber] = useState("")
    const [companyName, handleCompanyName, setCompanyName] = useInput("")
    const [address, handleAddress, setAddress] = useInput("")
    const [about, handleAbout, setAbout] = useInput("")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        categoryList()
    }, [])

    const categoryList = () => {
        dispatch(
            getServiceCategoryList((res, err) => {
                if (res) {
                    const response = res.data

                    const customCategories =
                        response && response.length > 0
                            ? response.map((item) => {
                                  return {
                                      label: item && item.category_name,
                                      value:
                                          item &&
                                          item.category_name
                                              .toLowerCase()
                                              .replace(/\s/g, "_"),
                                  }
                              })
                            : [
                                  {
                                      label: "",
                                      value: "",
                                  },
                              ]
                    setCategories(customCategories)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const confirmAlert = () => {
        setYoutubeLink("")
        setEmail("")
        setPhoneNumber("")
        setCompanyName("")
        setAddress("")
        setAbout("")
        setAlert(false)
        setModalShow(true)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        dispatch(
            createProviderstore(
                youtubeLink,
                email,
                phoneNumber,
                companyName,
                address,
                about,
                (res, err) => {
                    setLoading(false)
                    if (res && res.data && res.data.status === "error") {
                        return notify("error", res.data.data)
                    } else if (
                        res &&
                        res.data &&
                        res.data.status === "success"
                    ) {
                        setMessage(res.data.data)
                        setAlert(true)
                    }
                }
            )
        )
    }

    return (
        <Fragment>
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
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
                                            avatar.image
                                                ? avatar.image
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
                            <InputWithLabel
                                required
                                type='url'
                                label='You tube Video link'
                                id='youtubeVideoLink'
                                infoText='You tube Video link info'
                                placeholder='https://www.youtube.com/watch?v=j94TPOjUFh4'
                                value={youtubeLink}
                                onChange={handleYoutubeLink}
                            />

                            <div className='mb-4'>
                                <InputLabel
                                    label='Catgory'
                                    id='catgory'
                                    infoText='Catgory info'
                                />
                                <Select
                                    placeholder='Select a category'
                                    className='form-control input-box'
                                    value={category}
                                    onChange={(category) =>
                                        setCategory(category)
                                    }
                                    options={categories}
                                />
                            </div>

                            <InputWithLabel
                                required
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
                                    label='Company Phone Number'
                                    id='phoneNumber'
                                    infoText='Company Phone Number info'
                                />

                                <PhoneInput
                                    required
                                    className='form-control input-box'
                                    placeholder='1254857858'
                                    value={phoneNumber}
                                    onChange={(number) =>
                                        setPhoneNumber(number)
                                    }
                                />
                            </div>

                            <InputWithLabel
                                required
                                label='Company Name'
                                id='companyName'
                                infoText='Company Name info'
                                placeholder='Company Name'
                                value={companyName}
                                onChange={handleCompanyName}
                            />

                            <InputWithLabel
                                required
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

                            <div className='text-center'>
                                <SubmitButton
                                    blue={true}
                                    text='Create Store'
                                    loading={loading}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <AccountModal show={modalShow} onHide={() => setModalShow(false)} />
        </Fragment>
    )
}

export default withRouter(MainForm)
