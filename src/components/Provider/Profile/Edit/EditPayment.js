import React from "react"
import { Modal } from "react-bootstrap"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"

const EditPayment = ({
    show,
    onHide,
    onSubmit,
    bankAccountName,
    handleBankAccountName,
    iban,
    handleIban,
    bankName,
    handleBankName,
    swiftBic,
    handleSwiftBic,
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
                        Edit Payment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='form-container'>
                        <CustomInput
                            required
                            showLabel
                            label='Name of the Account'
                            id='nameOfAccount'
                            infoText='Name of the Account info'
                            placeholder='Gaji asif'
                            value={bankAccountName}
                            onChange={handleBankAccountName}
                        />

                        <div className='row'>
                            <div className='col-lg-6'>
                                <CustomInput
                                    required
                                    showLabel
                                    label='IBAN'
                                    id='iban'
                                    infoText='IBAN info'
                                    placeholder='lora.king@gmail.com'
                                    value={iban}
                                    onChange={handleIban}
                                />
                            </div>
                            <div className='col-lg-6'>
                                <CustomInput
                                    showLabel
                                    required
                                    label='Bank Name'
                                    id='bankName'
                                    infoText='Bank Name info'
                                    placeholder='Bank Name'
                                    value={bankName}
                                    onChange={handleBankName}
                                />
                            </div>
                        </div>

                        <CustomInput
                            required
                            showLabel
                            label='SWIFT BIC'
                            id='swiftBic'
                            infoText='SWIFT BIC info'
                            placeholder='**********'
                            value={swiftBic}
                            onChange={handleSwiftBic}
                        />

                        <div className='d-flex justify-content-between mb-4'>
                            <button
                                type='button'
                                onClick={onHide}
                                className='gradient-btn gradient-lime'
                            >
                                Cancel
                            </button>
                            <SubmitButton
                                blue={true}
                                text='Edit Account'
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
