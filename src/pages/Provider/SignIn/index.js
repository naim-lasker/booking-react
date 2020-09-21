import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Spinner } from "react-bootstrap"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import { ProviderSignIn } from "../../../services/authentication"
import { useInput } from "../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../helpers/ui"
import auth from "../../../helpers/auth"

const SignInPage = (props) => {
    const providerInfo = auth.getProviderInfo()

    const dispatch = useDispatch()
    const [email, setEmail] = useInput("")
    const [password, setPasword] = useInput("")
    const [code, setCode] = useInput("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (providerInfo && providerInfo.token && providerInfo.role == 1) {
            window.location.href = "/provider-add-account"
        }
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (code !== "sWwm") {
            return notify("error", "Captcha code does not match")
        }

        setLoading(true)

        dispatch(
            ProviderSignIn(email, password, (res, err) => {
                setLoading(false)

                if (err) {
                    notify(
                        "error",
                        err.data && err.data.data
                            ? err.data.data
                            : err.data &&
                              err.data.contents &&
                              err.data.contents.email
                            ? err.data.contents.email[0]
                            : "Something went wrong"
                    )
                } else if (res) {
                    if (res.data && res.data.data && res.data.data.role == 1) {
                        auth.clearUserInfo()
                        auth.setProviderInfo(res.data.data)
                        window.location.href = "/provider-add-account"
                    } else {
                        notify("error", "Please provide valid credential")
                    }
                }
            })
        )
    }

    return (
        <Fragment>
            <ToastContainer />

            <Header />
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
                                                    src='/images/icons/arrow-shape.png'
                                                    alt=''
                                                />
                                                <span className='ml-2'>
                                                    Sign in
                                                </span>
                                            </h2>
                                            <div>
                                                <div className='input-group mb-3'>
                                                    <input
                                                        required
                                                        type='email'
                                                        autoComplete='on'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Email Address'
                                                        value={email}
                                                        onChange={setEmail}
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='/images/icons/email.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>

                                                <div className='input-group'>
                                                    <input
                                                        required
                                                        type='password'
                                                        autoComplete='on'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Password'
                                                        value={password}
                                                        onChange={setPasword}
                                                    />
                                                    <span className='input-group-append'>
                                                        <div className='input-group-text bg-transparent'>
                                                            <img
                                                                src='/images/icons/password.png'
                                                                alt=''
                                                            />
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='forget-pass text-center'>
                                                <a href='/'>
                                                    Forgot your password?
                                                </a>
                                            </div>

                                            <div>
                                                <div className='captcha-box mb-3 text-center'>
                                                    <span>sWwm</span>
                                                </div>
                                                <input
                                                    required
                                                    type='text'
                                                    className='form-control input-box'
                                                    placeholder='Type the code shown'
                                                    value={code}
                                                    onChange={setCode}
                                                />
                                            </div>

                                            <div className='mt-4 d-flex flex-sm-row flex-column-reverse justify-content-between align-items-center'>
                                                <p className='m-0'>
                                                    <span className='mr-2'>
                                                        Not registered yet?
                                                    </span>
                                                    <a
                                                        href='/provider-signup'
                                                        className='not-registered'
                                                    >
                                                        Click here
                                                    </a>
                                                </p>
                                                <button
                                                    href='/promotion'
                                                    className='gradient-btn gradient-lime mb-sm-0 mb-4'
                                                    type='submit'
                                                >
                                                    <span>Log In</span>
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
export default SignInPage