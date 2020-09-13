import React, { Fragment } from "react"
import Header from "../../../layouts/Header"
import Footer from "../../../layouts/Footer"

export default function LoginPage() {
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
                                                    className='form-control input-box py-2 border-right-0'
                                                    placeholder='Enter Email Address'
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
                                                    className='form-control input-box py-2 border-right-0'
                                                    placeholder='Enter Password'
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
                                            <a
                                                href='/promotion'
                                                className='gradient-btn gradient-lime mb-sm-0 mb-4'
                                            >
                                                Log In
                                            </a>
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
