import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PhoneInput from "react-phone-number-input"
import Header from "../../../../layouts/Header"
import Footer from "../../../../layouts/Footer"
import { createProviderstore } from "../../../../services/store"
import { useFileInput, useInput } from "../../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../../helpers/ui"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { SubmitButton } from "../../../../components/UI/Button"
import { FaHome } from "react-icons/fa"
import CustomAlert from "../../../../components/UI/SweetAlert"
import auth from "../../../../helpers/auth"

const ProviderCreateStore = (props) => {
    const dispatch = useDispatch()
    const providerInfo = auth.getProviderInfo()

    const [avatar, handleAvatar, setAvatar] = useFileInput({
        file: "",
        image: "",
    })
    const [youtubeLink, handleYoutubeLink, setYoutubeLink] = useInput("")
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

    useEffect(() => {
        // console.log("providerInfo", providerInfo)
    }, [])

    const confirmAlert = () => {
        setYoutubeLink("")
        setEmail("")
        setPhoneNumber("")
        setCompanyName("")
        setAddress("")
        setAbout("")
        setAlert(false)
        props.history.push("/")
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
            <ToastContainer />

            <Header />

            <CustomAlert
                show={alert}
                message={message}
                onConfirm={confirmAlert}
            />

            <section className='customer-edit-area'>
                <div className='container'>
                    <div className='row justify-content-center '>
                        <div className='col-lg-8'>
                            <div className='customer-edit-profile-container'>
                                <Breadcrumb
                                    icon={<FaHome />}
                                    names={[
                                        { name: "Dashboard", link: "/" },
                                        { name: "Create Store" },
                                    ]}
                                />

                                <div className='row justify-content-center my-5'>
                                    <div className='d-flex align-items-end'>
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
                                        <button className='question-icon pb-3'>
                                            ?
                                        </button>
                                    </div>
                                </div>

                                <div className='row justify-content-center mb-5'>
                                    <div className='col-lg-8'>
                                        <form onSubmit={handleSubmit}>
                                            <div className='form-container mb-3'>
                                                <div className='mb-4'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <label
                                                            className='label-name'
                                                            htmlFor='fullName'
                                                        >
                                                            You tube Video link
                                                        </label>
                                                        <button className='question-icon ml-2'>
                                                            ?
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input
                                                            required
                                                            type='text'
                                                            className='form-control input-box'
                                                            placeholder='https://www.youtube.com/watch?v=j94TPOjUFh4'
                                                            value={youtubeLink}
                                                            onChange={
                                                                handleYoutubeLink
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='mb-4'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <label
                                                            className='label-name'
                                                            htmlFor='email'
                                                        >
                                                            Email
                                                        </label>
                                                        <button className='question-icon ml-2'>
                                                            ?
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input
                                                            required
                                                            type='email'
                                                            className='form-control input-box'
                                                            placeholder='lora.king@gmail.com'
                                                            value={email}
                                                            onChange={
                                                                handleEmail
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='mb-4'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <label
                                                            className='label-name'
                                                            htmlFor='phoneNumber'
                                                        >
                                                            Company Phone Number
                                                        </label>
                                                        <button className='question-icon ml-2'>
                                                            ?
                                                        </button>
                                                    </div>

                                                    <PhoneInput
                                                        required
                                                        className='form-control input-box'
                                                        placeholder='1254857858'
                                                        value={phoneNumber}
                                                        onChange={(number) =>
                                                            setPhoneNumber(
                                                                number
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className='mb-4'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <label
                                                            className='label-name'
                                                            htmlFor='countryOforigin'
                                                        >
                                                            Company Name
                                                        </label>
                                                        <button className='question-icon ml-2'>
                                                            ?
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input
                                                            required
                                                            type='text'
                                                            className='form-control input-box'
                                                            placeholder='Company Name'
                                                            value={companyName}
                                                            onChange={
                                                                handleCompanyName
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='mb-4'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <label
                                                            className='label-name'
                                                            htmlFor='countryOforigin'
                                                        >
                                                            Company Address
                                                        </label>
                                                        <button className='question-icon ml-2'>
                                                            ?
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <input
                                                            required
                                                            type='text'
                                                            className='form-control input-box'
                                                            placeholder='London'
                                                            value={address}
                                                            onChange={
                                                                handleAddress
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='mb-4'>
                                                    <div className='d-flex align-items-center mb-3'>
                                                        <label
                                                            className='label-name'
                                                            htmlFor='countryOforigin'
                                                        >
                                                            About Company
                                                        </label>
                                                        <button className='question-icon ml-2'>
                                                            ?
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <textarea
                                                            rows='4'
                                                            type='text'
                                                            className='form-control input-box pt-2'
                                                            placeholder='It is Our Company'
                                                            value={about}
                                                            onChange={
                                                                handleAbout
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='text-center mb-4'>
                                                    <SubmitButton
                                                        blue={true}
                                                        text='Create Store'
                                                        loading={loading}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className='col-lg-10'>
                                        <div className='collapse-container'>
                                            <div
                                                className='accordion w-100'
                                                id='accordionExample'
                                            >
                                                <div className='card border-0 custom-card px-4'>
                                                    <div
                                                        className='card-header border-0 bg-white px-0 px-0'
                                                        id='headingTwo'
                                                    >
                                                        <h2 className='mb-0'>
                                                            <div className='d-flex justify-content-between'>
                                                                <button
                                                                    className='btn btn-link collapsed collapse-btn d-flex justify-content-between'
                                                                    type='button'
                                                                    data-toggle='collapse'
                                                                    data-target='#collapseTwo'
                                                                    aria-expanded='true'
                                                                    aria-controls='collapseTwo'
                                                                >
                                                                    <span>
                                                                        Add
                                                                        Account
                                                                        Details
                                                                    </span>
                                                                    <i className='fas fa-chevron-up'></i>
                                                                </button>
                                                                <div>
                                                                    <img
                                                                        src='/images/icons/collapse-icon.png'
                                                                        alt=''
                                                                    />
                                                                </div>
                                                            </div>
                                                        </h2>
                                                    </div>
                                                    <div
                                                        id='collapseTwo'
                                                        className='collapse'
                                                        aria-labelledby='headingTwo'
                                                        data-parent='#accordionExample'
                                                    >
                                                        <div className='card-body px-0 pt-0'>
                                                            Anim pariatur cliche
                                                            reprehenderit, enim
                                                            eiusmod high life
                                                            accusamus terry
                                                            richardson ad squid.
                                                            3 wolf moon officia
                                                            aute, non cupidatat
                                                            skateboard dolor
                                                            brunch. Food truck
                                                            quinoa nesciunt
                                                            laborum eiusmod.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}
export default ProviderCreateStore
