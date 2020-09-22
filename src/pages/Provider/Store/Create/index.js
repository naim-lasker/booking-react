import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { Spinner } from "react-bootstrap"
import Header from "../../../../layouts/Header"
import Footer from "../../../../layouts/Footer"
import { createProviderstore } from "../../../../services/store"
import { useInput } from "../../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../../helpers/ui"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { FaHome } from "react-icons/fa"
import CustomAlert from "../../../../components/UI/SweetAlert"

const ProviderCreateStore = (props) => {
    const dispatch = useDispatch()
    const [youtubeLink, handleYoutubeLink, setYoutubeLink] = useInput(
        "http://quizhaat.com/syslex_booking_new/create-store.html"
    )
    const [email, handleEmail, setEmail] = useInput("kafi@gmail.com")
    const [phoneNumber, handlePhoneNumber, setPhoneNumber] = useInput(
        "01717055477"
    )
    const [companyName, handleCompanyName, setCompanyName] = useInput(
        "Spondon IT"
    )
    const [address, handleAddress, setAddress] = useInput("dhaka")
    const [about, handleAbout, setAbout] = useInput("about about about")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")

    const hideAlert = () => {
        setAlert(false)
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
                    if (res && res.data && res.data.status == "error") {
                        return notify("error", res.data.data)
                    } else if (
                        res &&
                        res.data &&
                        res.data.status == "success"
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

            <CustomAlert show={alert} message={message} onConfirm={hideAlert} />

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
                                                />
                                                <img
                                                    className='w-100 h-100'
                                                    src='/images/profile/profile.png'
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

                                                    <div>
                                                        <input
                                                            required
                                                            type='number'
                                                            className='form-control input-box'
                                                            placeholder='1254857858'
                                                            value={phoneNumber}
                                                            onChange={
                                                                handlePhoneNumber
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
                                                        <input
                                                            type='text'
                                                            className='form-control input-box'
                                                            placeholder='it is Our Company'
                                                            value={about}
                                                            onChange={
                                                                handleAbout
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='action-buttons d-flex justify-content-center mb-4'>
                                                    <button className='gradient-btn gradient-blue ml-4'>
                                                        Create Store
                                                    </button>
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
