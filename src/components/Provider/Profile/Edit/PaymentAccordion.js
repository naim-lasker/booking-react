import React, { Fragment, useEffect, useState } from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import {
    getProviderAccountDetails,
    updateProviderAccountDetails,
} from "../../../../services/account"
import { CustomAlert } from "../../../UI/SweetAlert"
import EditPayment from "./EditPayment"

const PaymentAccordion = () => {
    const dispatch = useDispatch()

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
    const [bankInfo, setBankInfo] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        getBankInfo()
    }, [])

    const getBankInfo = () => {
        dispatch(
            getProviderAccountDetails((res, err) => {
                setGetLoading(false)

                if (res && res.data) {
                    setBankInfo(res.data.data)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const setBankInfoValues = () => {
        setBankAccountName(
            bankInfo.bank_account_name ? bankInfo.bank_account_name : ""
        )
        setIban(bankInfo.iban ? bankInfo.iban : "")
        setBankName(bankInfo.bank_name ? bankInfo.bank_name : "")
        setSwiftBic(bankInfo.swift_bic ? bankInfo.swift_bic : "")
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
                        getBankInfo()
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
        <Fragment>
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
                            onClick={() => {
                                setBankInfoValues()
                                setModalShow(true)
                            }}
                        >
                            Update Payment
                        </button>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Fragment>
    )
}

export default PaymentAccordion
