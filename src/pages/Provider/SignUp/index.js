import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import { Spinner } from "react-bootstrap"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import { providerSignUp } from "../../../services/authentication"
import { useInput } from "../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../helpers/ui"
import CustomAlert from "../../../components/UI/SweetAlert"

const ProviderSignUp = (props) => {
    const dispatch = useDispatch()

    const [firstName, handleFirstName, setFirstName] = useInput("")
    const [lastName, handlesetLastName, setLastName] = useInput("")
    const [email, handleEmail, setEmail] = useInput("")
    const [password, handlePasword, setPasword] = useInput("")
    const [
        confirmPassword,
        handleConfirmPassword,
        setConfirmPassword,
    ] = useInput("")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")

    const hideAlert = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPasword("")
        setConfirmPassword("")
        setAlert(false)
        props.history.push("/provider-signin")
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (password !== confirmPassword) {
            return notify("error", "Your pasword does not match!")
        }

        setLoading(true)

        dispatch(
            providerSignUp(firstName, lastName, email, password, (res, err) => {
                setLoading(false)

                if (err) {
                    notify(
                        "error",
                        err.data && err.data.contents && err.data.contents.email
                            ? err.data.contents.email[0]
                            : err.data &&
                              err.data.contents &&
                              err.data.contents.password
                            ? err.data.contents.password[0]
                            : "Something went wrong"
                    )
                } else if (res) {
                    if (
                        res.data &&
                        res.data.contents &&
                        res.data.contents.role == 1
                    ) {
                        setMessage(email + " is registered successfully.")
                        setAlert(true)
                    }
                }
            })
        )
    }

    return (
        <Fragment>
            <ToastContainer />

            <Header />

            <CustomAlert show={alert} message={message} onConfirm={hideAlert} />

            <section className='singin-area mb-5 pb-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='outer-container'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-9'>
                                        <form onSubmit={handleSubmit}>
                                            <h2 className='sign-title'>
                                                <img
                                                    src='images/arrow-shape.png'
                                                    alt=''
                                                />
                                                Create your Provider account
                                            </h2>
                                            <div>
                                                <div className='input-group mb-3'>
                                                    <input
                                                        required
                                                        type='text'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter First Name'
                                                        value={firstName}
                                                        onChange={
                                                            handleFirstName
                                                        }
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='images/icons/user.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className='input-group mb-3'>
                                                    <input
                                                        required
                                                        type='text'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Last Name'
                                                        value={lastName}
                                                        onChange={
                                                            handlesetLastName
                                                        }
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='images/icons/user.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className='input-group mb-3'>
                                                    <input
                                                        required
                                                        type='email'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Email Address'
                                                        value={email}
                                                        onChange={handleEmail}
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='images/icons/email.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>

                                                <div className='input-group mb-3'>
                                                    <input
                                                        required
                                                        type='password'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Password'
                                                        value={password}
                                                        onChange={handlePasword}
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='images/icons/password.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className='input-group'>
                                                    <input
                                                        required
                                                        type='password'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Confirm Password'
                                                        value={confirmPassword}
                                                        onChange={
                                                            handleConfirmPassword
                                                        }
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='images/icons/password.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>

                                                <div className='mt-5 d-flex justify-content-between align-items-center'>
                                                    <label className='mt-4 ml-2'>
                                                        <input
                                                            required
                                                            type='checkbox'
                                                        />
                                                        <span className='mx-2'>
                                                            I agree to the
                                                        </span>
                                                        <a
                                                            href='/'
                                                            className='not-registered'
                                                        >
                                                            <span className='mx-2'>
                                                                Privacy Policy
                                                            </span>
                                                        </a>
                                                        &
                                                        <a
                                                            href='/'
                                                            className='not-registered'
                                                        >
                                                            <span className='ml-2'>
                                                                Terms of use
                                                            </span>
                                                        </a>
                                                    </label>

                                                    <button
                                                        type='submit'
                                                        className='primary-btn gradient-btn gradient-lime'
                                                    >
                                                        <span>Register</span>
                                                        {loading && (
                                                            <Spinner
                                                                as='span'
                                                                animation='border'
                                                                size='sm'
                                                                role='status'
                                                                aria-hidden='true'
                                                                className='ml-2 mb-1'
                                                            />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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
export default ProviderSignUp
