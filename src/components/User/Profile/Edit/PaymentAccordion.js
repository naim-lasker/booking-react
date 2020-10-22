import React, { Fragment, useEffect, useState } from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { useDispatch } from "react-redux"
import moment from "moment"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import {
    getUserCardDetails,
    updateUserCardDetails,
} from "../../../../services/account"
import { CustomAlert } from "../../../UI/SweetAlert"
import EditPayment from "./EditPayment"

const PaymentAccordion = () => {
    const dispatch = useDispatch()

    const [cardHolderName, handleCardHolderName, setCardHolderName] = useInput(
        ""
    )
    const [expiryDate, setExpiryDate] = useState(new Date())
    const [cvv, handleCvv, setCvv] = useInput("")
    const [cardNo, handleCardNo, setCardNo] = useInput("")
    const [modalShow, setModalShow] = useState(false)
    const [getLoading, setGetLoading] = useState(true)
    const [paymentUpdateLoading, setPaymentUpdateLoading] = useState(false)
    const [cardInfo, setCardInfo] = useState("")
    const [message, setMessage] = useState("")
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        getCardInfo()
    }, [])

    const getCardInfo = () => {
        dispatch(
            getUserCardDetails((res, err) => {
                setGetLoading(false)

                if (res && res.data) {
                    setCardInfo(res.data.data)
                } else if (err) {
                    notify("error", "Something went wrong")
                }
            })
        )
    }

    const setCardInfoValues = () => {
        setCardHolderName(
            cardInfo.card_holder_name ? cardInfo.card_holder_name : ""
        )
        setExpiryDate(
            cardInfo.expiry_date ? moment(cardInfo.expiry_date).toDate() : new Date()
        )
        setCvv(cardInfo.cvv ? cardInfo.cvv : "")
        setCardNo(cardInfo.card_no ? cardInfo.card_no : "")
    }

    const updatePayment = (e) => {
        e.preventDefault()
        setPaymentUpdateLoading(true)

        dispatch(
            updateUserCardDetails(
                cardHolderName,
                expiryDate,
                cvv,
                cardNo,
                (res, err) => {
                    setModalShow(false)
                    setPaymentUpdateLoading(false)

                    if (res && res.data && res.data.status === "success") {
                        getCardInfo()
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
                cardHolderName={cardHolderName}
                handleCardHolderName={handleCardHolderName}
                expiryDate={expiryDate}
                setExpiryDate={(expiryDate) => setExpiryDate(expiryDate)}
                cvv={cvv}
                handleCvv={handleCvv}
                cardNo={cardNo}
                handleCardNo={handleCardNo}
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
                            <span>Update Card Details</span>
                            <FaChevronUp />
                        </div>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                    <Card.Body className='px-0 pt-0 text-center'>
                        <button
                            className='gradient-btn gradient-lime mr-4'
                            onClick={() => {
                                setCardInfoValues()
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
