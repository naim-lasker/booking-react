import React, { useState } from "react"
import { Accordion, Button, Card } from "react-bootstrap"
import { FaChevronUp } from "react-icons/fa"
import { useInput } from "../../../../helpers/common"
import { notify } from "../../../../helpers/ui"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"
import EditPayment from "./EditPayment"

const BottomAccordion = () => {
    const [password, handlePassword, setYoutubeLink] = useInput("")
    const [
        confirmPassword,
        handleConfirmPassword,
        setConfirmPassword,
    ] = useInput("")
    const [loading, setLoading] = useState()

    const [bankAccountName, handleBankAccountName, setBankAccountName] = useInput("")
    const [iban, handleIban, setIban] = useInput("")
    const [bankName, handleBankName, setBankName] = useInput("")
    const [swiftBic, handleSwiftBic, setSwiftBic] = useInput("")
    const [paymentLoading, setPaymentLoading] = useState()
    const [modalShow, setModalShow] = useState(false)

    const updatePassword = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            notify("error", "Your pasword does not match!")
        }
    }

    const updatePayment = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            notify("error", "Your pasword does not match!")
        }
    }

    return (
        <div className='row justify-content-center mb-5'>
            <EditPayment
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={updatePayment}
                loading={paymentLoading}
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
