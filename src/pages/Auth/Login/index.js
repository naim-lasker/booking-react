import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"
import { Login } from "../../../services/authentication"

export default function LoginPage() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("naim@gmail.com")
    const [password, setPasword] = useState("123456")

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(
            Login(email, password, (res, err) => {
                if (err) {
                    return console.log("login error", err)
                }

                console.log("login res", res)
            })
        )
    }

    return (
        <Fragment>
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
                                                    Provider Sign in
                                                </span>
                                            </h2>
                                            <div>
                                                <div className='input-group mb-3'>
                                                    <input
                                                        type='text'
                                                        autoComplete='on'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Email Address'
                                                        value={email}
                                                        onChange={(e) =>
                                                            setPasword(
                                                                e.target.value
                                                            )
                                                        }
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
                                                        type='password'
                                                        autoComplete='on'
                                                        className='form-control input-box py-2 border-right-0'
                                                        placeholder='Enter Password'
                                                        value={password}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
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
                                                    type='text'
                                                    className='form-control input-box'
                                                    placeholder='Type the code shown'
                                                />
                                            </div>

                                            <div className='mt-4 d-flex flex-sm-row flex-column-reverse justify-content-between align-items-center'>
                                                <p className='m-0'>
                                                    Not registered yet?{" "}
                                                    <a
                                                        href='/'
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
                                                    Log In
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
