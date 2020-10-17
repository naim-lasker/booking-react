import React, { useEffect, useState } from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import {
    getProviderAccountDetails,
    updateProviderAccountDetails,
} from "../../../../services/account"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"
import { CustomAlert } from "../../../UI/SweetAlert"
import EditPayment from "./EditPayment"

const BottomAccordion = () => {
    const dispatch = useDispatch()
    const [password, handlePassword, setPassword] = useInput("")
    const [
        confirmPassword,
        handleConfirmPassword,
        setConfirmPassword,
    ] = useInput("")
    const [loading, setLoading] = useState()

    const [
        bankAccountName,
        handleBankAccountName,
        setBankAccountName,
    ] = useInput("")
    const [iban, handleIban, setIban] = useInput("")
    const [bankName, handleBankName, setBankName] = useInput("")
    const [swiftBic, handleSwiftBic, setSwiftBic] = useInput("")
    const [modalShow, setModalShow] = useState(false)
    const [getLoading, setGetLoading] = useState(true)
    const [paymentUpdateLoading, setPaymentUpdateLoading] = useState(false)
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        const getBankInfo = async () => {
            dispatch(
                getProviderAccountDetails((res, err) => {
                    console.log("res", res)
                    console.log("err", err)
                    setGetLoading(false)

                    if (res && res.data) {
                        setInputValue(res.data.data)
                    } else if (err) {
                        notify("error", "Something went wrong")
                    }
                })
            )
        }

        getBankInfo()
    }, [])

    const setInputValue = (response) => {
        setBankAccountName(
            response.bank_account_name ? response.bank_account_name : ""
        )
        setIban(response.iban ? response.iban : "")
        setBankName(response.bank_name ? response.bank_name : "")
        setSwiftBic(response.swift_bic ? response.swift_bic : "")
    }

    const updatePassword = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            notify("error", "Your pasword does not match!")
        }
    }

    const updatePayment = (e) => {
        e.preventDefault()
        setPaymentUpdateLoading(true)

        dispatch(
            updateProviderAccountDetails(
                bankAccountName,
                iban,
                bankName,
                swiftBic,
                (res, err) => {
                    setModalShow(false)
                    setPaymentUpdateLoading(false)

                    if (res && res.data && res.data.status === "success") {
                        setMessage(res.data.data)
                        setAlert(true)
                    } else if (err) {
                        return notify("error", "Please check all the fields")
                    }
                }
            )
        )
    }

    return (
        <div className='row justify-content-center mb-5'>
            <CustomAlert
                show={alert}
                message={message}
                onConfirm={() => setAlert(false)}
            />

            <EditPayment
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={updatePayment}
                loading={paymentUpdateLoading}
                bankAccountName={bankAccountName}
                handleBankAccountName={handleBankAccountName}
                iban={iban}
                handleIban={handleIban}
                bankName={bankName}
                handleBankName={handleBankName}
                swiftBic={swiftBic}
                handleSwiftBic={handleSwiftBic}
            />

            <div className='col-lg-10'>
                <Accordion className='collapse-container'>
                    <Card className='border-0 custom-card px-4 mb-3'>
                        <Card.Header className='card-header border-0 bg-white px-0 px-0'>
                            <Accordion.Toggle
                                as={Button}
                                className='btn d-block w-100 p-0'
                                variant='link'
                                eventKey='0'
                            >
                                <div className='collapsed collapse-btn d-flex justify-content-between align-items-center'>
                                    <span>Update Payment Details</span>
                                    <FaChevronUp />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='0'>
                            <Card.Body className='px-0 pt-0 text-center'>
                                <button
                                    className='gradient-btn gradient-lime mr-4'
                                    onClick={() => setModalShow(true)}
                                >
                                    Update Payment
                                </button>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card className='border-0 custom-card px-4'>
                        <Card.Header className='card-header border-0 bg-white px-0 px-0'>
                            <Accordion.Toggle
                                as={Button}
                                className='btn d-block w-100 p-0'
                                variant='link'
                                eventKey='1'
                            >
                                <div className='collapsed collapse-btn d-flex justify-content-between align-items-center'>
                                    <span>Change Password</span>
                                    <FaChevronUp />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey='1'>
                            <Card.Body className='px-0 pt-0'>
                                <form onSubmit={updatePassword}>
                                    <CustomInput
                                        required
                                        type='password'
                                        showLabel
                                        label='Password'
                                        id='password'
                                        infoText='Password info'
                                        className='mb-2'
                                        placeholder='******'
                                        value={password}
                                        onChange={handlePassword}
                                    />

                                    <CustomInput
                                        required
                                        type='password'
                                        showLabel
                                        label='Confirm Password'
                                        id='confirmPassword'
                                        infoText='Confirm Password info'
                                        placeholder='******'
                                        value={confirmPassword}
                                        onChange={handleConfirmPassword}
                                    />

                                    <div className='mt-3 text-right'>
                                        <SubmitButton
                                            blue={true}
                                            text='Update Password'
                                            loading={loading}
                                        />
                                    </div>
                                </form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
    )
}

export default BottomAccordion
