import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Select from "react-select"
import PhoneInput from "react-phone-number-input"
import { Accordion, Button, Card } from "react-bootstrap"
import Header from "../../../../layouts/Header"
import Footer from "../../../../layouts/Footer"
import {
    createProviderstore,
    getCategoryList,
} from "../../../../services/store"
import { useFileInput, useInput } from "../../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../../helpers/ui"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { SubmitButton } from "../../../../components/UI/Button"
import { FaChevronUp, FaHome } from "react-icons/fa"
import CustomAlert from "../../../../components/UI/SweetAlert"
import auth from "../../../../helpers/auth"
import { InputWithLabel } from "../../../../components/UI/InputField"
import { InputLabel } from "../../../../components/UI/InputLabel"
import { TextareaWithLabel } from "../../../../components/UI/TextareaField"

const ProviderCreateStore = (props) => {
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

    useEffect(() => {
        categoryList()
    }, [])


    const categoryList = () => {
        dispatch(
            getCategoryList((res, err) => {
                if (res) {
                    const response = res.data

                    const customCategories =
                        response.length > 0
                            ? response.map((item) => {
                                  return {
                                      label: item.service_name,
                                      value: item.service_name
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

                    console.log("customCategories", customCategories)
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
                                    <div className='col-lg-8 mb-5'>
                                        <form onSubmit={handleSubmit}>
                                            <div className='form-container mb-3'>
                                                <div className='mb-4'>
                                                    <InputWithLabel
                                                        required
                                                        type='url'
                                                        label='You tube Video link'
                                                        id='youtubeVideoLink'
                                                        infoText='You tube Video link info'
                                                        placeholder='https://www.youtube.com/watch?v=j94TPOjUFh4'
                                                        value={youtubeLink}
                                                        onChange={
                                                            handleYoutubeLink
                                                        }
                                                    />
                                                </div>

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
                                                            setCategory(
                                                                category
                                                            )
                                                        }
                                                        options={categories}
                                                    />
                                                </div>

                                                <div className='mb-4'>
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
                                                </div>

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
                                                            setPhoneNumber(
                                                                number
                                                            )
                                                        }
                                                    />
                                                </div>

                                                <div className='mb-4'>
                                                    <InputWithLabel
                                                        required
                                                        label='Company Name'
                                                        id='companyName'
                                                        infoText='Company Name info'
                                                        placeholder='Company Name'
                                                        value={companyName}
                                                        onChange={
                                                            handleCompanyName
                                                        }
                                                    />
                                                </div>

                                                <div className='mb-4'>
                                                    <InputWithLabel
                                                        required
                                                        label='Company Address'
                                                        id='companyAddress'
                                                        infoText='Company Address info'
                                                        placeholder='London'
                                                        value={address}
                                                        onChange={
                                                            handleAddress
                                                        }
                                                    />
                                                </div>

                                                <div className='mb-4'>
                                                    <TextareaWithLabel
                                                        required
                                                        rows='4'
                                                        maxLength='90'
                                                        label='About Your Company'
                                                        id='aboutYourCompany'
                                                        infoText='About Your Company info'
                                                        placeholder='It is Our Company'
                                                        value={about}
                                                        onChange={
                                                            handleAbout
                                                        }
                                                    />
                                                </div>

                                                <div className='text-center'>
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
                                        <Accordion className='collapse-container'>
                                            <Card className='border-0 custom-card px-4'>
                                                <Card.Header className='card-header border-0 bg-white px-0 px-0'>
                                                    <Accordion.Toggle
                                                        as={Button}
                                                        className='btn d-block w-100 p-0'
                                                        variant='link'
                                                        eventKey='0'
                                                    >
                                                        <div className='collapsed collapse-btn d-flex justify-content-between align-items-center'>
                                                            <span>
                                                                Add Account
                                                                Details
                                                            </span>
                                                            <FaChevronUp />
                                                        </div>
                                                    </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey='0'>
                                                    <Card.Body className='px-0 pt-0'>
                                                        Anim pariatur cliche
                                                        reprehenderit, enim
                                                        eiusmod high life
                                                        accusamus terry
                                                        richardson ad squid. 3
                                                        wolf moon officia aute,
                                                        non cupidatat skateboard
                                                        dolor brunch. Food truck
                                                        quinoa nesciunt laborum
                                                        eiusmod.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
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
