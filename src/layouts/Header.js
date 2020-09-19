import React from "react"
import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
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
                        <i className='fas fa-bars'></i>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarToggler'
                    >
                        <ul className='navbar-nav ml-auto align-items-lg-center'>
                            <li className='nav-item active'>
                                <a className='nav-link' href='/'>
                                    Home
                                    <span className='sr-only'>(current)</span>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/news'>
                                    News
                                </a>
                            </li>
                            <li className='nav-item mx-lg-4 mx-0'>
                                <div className='authenticate d-flex flex-column flex-lg-row align-items-center dropdown'>
                                    <Link
                                        to='/login'
                                        className='nav-link mb-2 mb-lg-0'
                                        type='button'
                                        id='dropdownSignIn'
                                        data-toggle='dropdown'
                                        aria-haspopup='true'
                                        aria-expanded='false'
                                    >
                                        <img
                                            className='mr-2'
                                            src='assets/images/icons/sign-in.png'
                                            alt=''
                                        />
                                        Sign In
                                    </Link>

                                    <Dropdown>
                                        <Dropdown.Toggle className="nav-link text-left mb-2 mb-lg-0"
                                            variant='success'
                                            id='dropdown-basic'
                                        >
                                            Sign Up
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href='/provider-signup'>
                                                Sign in as Provider
                                            </Dropdown.Item>
                                            <Dropdown.Item href='#/action-2'>
                                                Sign in as User
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
