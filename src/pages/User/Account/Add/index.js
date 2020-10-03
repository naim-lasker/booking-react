import React, { Fragment, useState } from "react"
import { useDispatch } from "react-redux"
import Header from "../../../../layouts/Header"
import Footer from "../../../../layouts/Footer"
import { addUserAccountDetails } from "../../../../services/account"
import { useInput } from "../../../../helpers/common"
import { ToastContainer } from "react-toastify"
import { notify } from "../../../../helpers/ui"
import Breadcrumb from "../../../../components/UI/Breadcrumb"
import { FaHome } from "react-icons/fa"
import CustomAlert from "../../../../components/UI/SweetAlert"
import { SubmitButton } from "../../../../components/UI/Button"

const UserAddAccount = (props) => {
    const dispatch = useDispatch()
    const [bankAccountName, setBankAccountName] = useInput("")
    const [iban, setIban] = useInput("")
    const [bankName, setBankName] = useInput("")
    const [swiftBic, setSwiftBic] = useInput("")
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState("")

    const confirmAlert = () => {
        setAlert(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setLoading(true)

        dispatch(
            addUserAccountDetails(
                bankAccountName,
                iban,
                bankName,
                swiftBic,
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

                    console.log("add account res", res)
                    console.log("add account err", err)
                    // props.history.push("/")
                }
            )
        )
    }

    return (
        <Fragment>
            <ToastContainer />

            <Header />

            <CustomAlert show={alert} message={message} onConfirm={confirmAlert} />

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
                                        <form onSubmit={handleSubmit}>
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
                                                            required
                                                            type='text'
                                                            className='form-control input-box'
                                                            placeholder='Gaji asif'
                                                            value={
                                                                bankAccountName
                                                            }
                                                            onChange={
                                                                setBankAccountName
                                                            }
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
                                                                    required
                                                                    type='text'
                                                                    className='form-control input-box'
                                                                    placeholder='lora.king@gmail.com'
                                                                    value={iban}
                                                                    onChange={
                                                                        setIban
                                                                    }
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
                                                                    required
                                                                    type='text'
                                                                    className='form-control input-box'
                                                                    placeholder='Bank Name'
                                                                    value={
                                                                        swiftBic
                                                                    }
                                                                    onChange={
                                                                        setSwiftBic
                                                                    }
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
                                                            required
                                                            type='text'
                                                            className='form-control input-box'
                                                            placeholder='**********'
                                                            value={bankName}
                                                            onChange={
                                                                setBankName
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-between mb-5 pb-5'>
                                                    <a
                                                        href='/promotion'
                                                        className='gradient-btn gradient-lime'
                                                    >
                                                        Cancel
                                                    </a>
                                                    <SubmitButton
                                                        blue={true}
                                                        text='Add Account'
                                                        loading={loading}
                                                    />
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
export default UserAddAccount
