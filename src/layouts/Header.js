import React, { Fragment } from "react"
import { Dropdown } from "react-bootstrap"
import { FaBars, FaBell, FaEnvelope, FaSignInAlt } from "react-icons/fa"
import auth from "../helpers/auth"

const Header = () => {
    const userInfo = auth.getUserInfo()
    const providerInfo = auth.getProviderInfo()

    const logOut = () => {
        auth.clearUserInfo()
        auth.clearProviderInfo()
        window.location.href = "/"
    }

    return (
        <header className='header-area pb-3 pb-lg-5'>
            <div className='container'>
                <nav className='navbar navbar-expand-lg'>
                    <a className='navbar-brand' href='/'>
                        <img src='/images/logo.png' alt='' />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarToggler'
                        aria-controls='navbarToggler'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <FaBars />
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarToggler'
                    >
                        <ul className='navbar-nav ml-auto align-items-lg-center'>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Help</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Currency</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link'>Blog</a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    href='/provider-booking'
                                >
                                    My Profile
                                </a>
                            </li>

                            {(userInfo && userInfo.token) ||
                            (providerInfo && providerInfo.token) ? (
                                <Fragment>
                                    <li className='nav-item'>
                                        <button className='nav-link'>
                                            <FaEnvelope className='menu-icon' />
                                        </button>
                                    </li>
                                    <li className='nav-item'>
                                        <button className='nav-link'>
                                            <FaBell className='menu-icon' />
                                            <span className='menu-notification'>
                                                0
                                            </span>
                                        </button>
                                    </li>
                                    <li className='nav-item ml-3'>
                                        <button
                                            className='nav-link sigh-out-btn'
                                            onClick={logOut}
                                        >
                                            <FaSignInAlt className='mr-2' />
                                            <span>Log out</span>
                                        </button>
                                    </li>
                                </Fragment>
                            ) : (
                                <li className='nav-item mx-lg-4 mx-0'>
                                    <div className='authenticate d-flex flex-column flex-lg-row align-items-center dropdown'>
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                className='nav-link text-left mb-2 mb-lg-0'
                                                variant='success'
                                            >
                                                <img
                                                    className='mr-2'
                                                    src='/images/icons/sign-in.png'
                                                    alt=''
                                                />
                                                Sign In
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href='/provider-signin'>
                                                    Sign in as Provider
                                                </Dropdown.Item>
                                                <Dropdown.Item href='/user-signin'>
                                                    Sign in as User
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                        <Dropdown>
                                            <Dropdown.Toggle
                                                className='nav-link text-left mb-2 mb-lg-0'
                                                variant='success'
                                            >
                                                Sign Up
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href='/provider-signup'>
                                                    Sign up as Provider
                                                </Dropdown.Item>
                                                <Dropdown.Item href='/user-signup'>
                                                    Sign up as User
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
