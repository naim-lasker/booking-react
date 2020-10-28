import React, { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import { userSignIn } from "../../../services/authentication"
import { randomString, useInput } from "../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../helpers/ui"
import auth from "../../../helpers/auth"
import { SubmitButton } from "../../../components/UI/Button"
import { CustomTooltip } from "../../../components/UI/Tooltip"

const UserSignIn = () => {
    const userInfo = auth.getUserInfo()

    const dispatch = useDispatch()
    const [email, setEmail] = useInput("")
    const [password, setPasword] = useInput("")
    const [captcha, setCaptcha] = useState("")
    const [code, setCode] = useInput("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (userInfo && userInfo.token && userInfo.role == 2) {
            window.location.href = "/user-add-card"
        }

        setCaptcha(randomString(4))
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        if (code !== captcha) {
            return notify("error", "Captcha code does not match")
        }

        setLoading(true)

        dispatch(
            userSignIn(email, password, (res, err) => {
                if (err) {
                    setLoading(false)
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
                    console.log("res", res)
                    if (res.data && res.data.data && res.data.data.role == 2) {
                        auth.clearProviderInfo()
                        auth.setUserInfo(res.data.data)
                        console.log("res.data.data", res.data.data)

                        if (res.data.data.hasStore == 1) {
                            window.location.href = "/user-restaurant-list"
                        } else {
                            window.location.href = "/user-add-card"
                        }
                        setLoading(false)
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
                                                <div className='captcha-box mb-3 d-flex align-items-center text-center'>
                                                    <span className='captcha-text d-block w-75'>
                                                        {captcha}
                                                    </span>
                                                    <button
                                                        className='d-block w-25'
                                                        type='button'
                                                        onClick={() =>
                                                            setCaptcha(
                                                                randomString(5)
                                                            )
                                                        }
                                                        data-tip
                                                        data-for='captchaBtn'
                                                    >
                                                        <img
                                                            className='captcha-img'
                                                            src='/images/refresh.png'
                                                            alt=''
                                                        />
                                                    </button>
                                                    <CustomTooltip
                                                        id='captchaBtn'
                                                        text='Click to refresh captcha'
                                                    />
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
                                                <p className='m-0 mt-md-0 mt-4'>
                                                    <span className='mr-2'>
                                                        Not registered yet?
                                                    </span>
                                                    <a
                                                        href='/user-signup'
                                                        className='not-registered'
                                                    >
                                                        Click here
                                                    </a>
                                                </p>
                                                <SubmitButton
                                                    lime={true}
                                                    text='Log In'
                                                    loading={loading}
                                                />
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
export default UserSignIn
