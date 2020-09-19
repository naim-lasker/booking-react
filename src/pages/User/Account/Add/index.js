import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { Spinner } from "react-bootstrap"
import Header from "../../../../layouts/Header"
import Footer from "../../../../layouts/Footer"
import { UserSignIn } from "../../../../services/authentication"
import { useInput } from "../../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../../helpers/ui"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { FaHome } from "react-icons/fa"

const AddUserAccount = (props) => {
    const dispatch = useDispatch()
    const [firstName, setFirstName] = useInput("Naim")
    const [lastName, setLastName] = useInput("Lasker")
    const [email, setEmail] = useInput("user1@gmail.com")
    const [password, setPasword] = useInput("123456")
    const [consfirmPassword, setConsfirmPassword] = useInput("123456")
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        dispatch(
            UserSignIn(firstName, lastName, email, password, (res, err) => {
                setLoading(false)
                if (res.data.status == "error") {
                    return notify("error", res.data.data)
                }

                console.log("sign up res", res)
                // props.history.push("/")
            })
        )
    }

    return (
        <Fragment>
            <ToastContainer />

            <Header />
            <section className='customer-edit-area'>
                <div className='container'>
                    <div className='row justify-content-center '>
                        <div className='col-lg-8'>
                            <div className='customer-edit-profile-container'>
                                <Breadcrumb
                                    icon={<FaHome />}
                                    names={[
                                        { name: "Dashboard", link: "/" },
                                        { name: "Add Account Details" },
                                    ]}
                                />

                                <div className='row justify-content-center my-5'>
                                    <div className='col-lg-8'>
                                        <div className='form-container mb-3'>
                                            <div className='mb-4'>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <label
                                                        className='label-name'
                                                        htmlFor='fullName'
                                                    >
                                                        Name of the Account
                                                    </label>
                                                    <button className='question-icon ml-2'>
                                                        ?
                                                    </button>
                                                </div>
                                                <div>
                                                    <input
                                                        type='text'
                                                        className='form-control input-box'
                                                        placeholder='Gaji asif'
                                                    />
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <div className='d-flex align-items-center mb-3'>
                                                            <label
                                                                className='label-name'
                                                                htmlFor='email'
                                                            >
                                                                IBAN
                                                            </label>
                                                            <button className='question-icon ml-2'>
                                                                ?
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <input
                                                                type='text'
                                                                className='form-control input-box'
                                                                placeholder='lora.king@gmail.com'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <div className='d-flex align-items-center mb-3'>
                                                            <label
                                                                className='label-name'
                                                                htmlFor='phoneNumber'
                                                            >
                                                                Bank Name
                                                            </label>
                                                            <button className='question-icon ml-2'>
                                                                ?
                                                            </button>
                                                        </div>

                                                        <div>
                                                            <input
                                                                type='text'
                                                                className='form-control input-box'
                                                                placeholder='Bank Name'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='mb-4'>
                                                <div className='d-flex align-items-center mb-3'>
                                                    <label
                                                        className='label-name'
                                                        htmlFor='countryOforigin'
                                                    >
                                                        SWIFT BIC
                                                    </label>
                                                    <button className='question-icon ml-2'>
                                                        ?
                                                    </button>
                                                </div>
                                                <div>
                                                    <input
                                                        type='text'
                                                        className='form-control input-box'
                                                        placeholder='**********'
                                                    />
                                                </div>
                                            </div>

                                            <div className='d-flex justify-content-between mb-5 pb-5'>
                                                <button className='gradient-btn gradient-lime'>
                                                    Cancel
                                                </button>
                                                <button className='gradient-btn gradient-blue gradient-lime'>
                                                    Add Account
                                                </button>
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
export default AddUserAccount
