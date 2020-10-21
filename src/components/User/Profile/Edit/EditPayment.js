import React from "react"
import { Modal } from "react-bootstrap"
import DateInput from "../../../Public/Home/Tab/DateInput"
import InfoText from "../../../Public/Home/Tab/InfoText"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"

const EditPayment = ({
    show,
    onHide,
    onSubmit,
    cardHolderName,
    handleCardHolderName,
    expiryDate,
    setExpiryDate,
    cvv,
    handleCvv,
    cardNo,
    handleCardNo,
    loading,
}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size='lg'
            aria-labelledby='edit-category-modal'
            centered
        >
            <form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id='edit-category-modal'>
                        Edit Card
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='mx-3'>
                    <div className='form-container'>
                        <CustomInput
                            required
                            showLabel
                            label='Card Holder Name'
                            id='cardHolderName'
                            infoText='Card Holder Name info'
                            placeholder='Gaji asif'
                            value={cardHolderName}
                            onChange={handleCardHolderName}
                        />

                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='d-flex align-items-center mb-3'>
                                    <InfoText
                                        text='Expiry Date'
                                        tooltipText='Expiry Date Info'
                                        id='expiry Date'
                                    />
                                </div>
                                <DateInput
                                    classInput='input-with-icon'
                                    classIconContainer='input-icon-container'
                                    classIcon='input-icon'
                                    placeholderText='29/08/2020'
                                    icon='/images/icons/calendar.png'
                                    selected={expiryDate}
                                    onChange={(expiryDate) =>
                                        setExpiryDate(expiryDate)
                                    }
                                />
                            </div>
                            <div className='col-lg-6'>
                                <CustomInput
                                    showLabel
                                    required
                                    type='number'
                                    label='CVV'
                                    id='cvv'
                                    infoText='CVV info'
                                    placeholder='CVV'
                                    value={cvv}
                                    onChange={handleCvv}
                                />
                            </div>
                        </div>

                        <CustomInput
                            required
                            type='number'
                            showLabel
                            label='Card no'
                            id='cardNo'
                            infoText='Card no info'
                            placeholder='**********'
                            value={cardNo}
                            onChange={handleCardNo}
                        />

                        <div className='d-flex justify-content-between mb-4'>
                            <button
                                onClick={onHide}
                                className='gradient-btn gradient-lime'
                            >
                                Cancel
                            </button>
                            <SubmitButton
                                blue={true}
                                text='Edit Card'
                                loading={loading}
                            />
                        </div>
                    </div>
                </Modal.Body>
            </form>
        </Modal>
    )
}

export default EditPayment
