import React from "react"
import { Modal } from "react-bootstrap"
import { SubmitButton } from "../../../UI/Button"
import { CustomInput } from "../../../UI/InputField"

const AddQuantity = ({show, onHide, onSubmit, value, onChange, loading}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size='md'
            aria-labelledby='add-quantity'
            centered
        >
            <form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id='add-quantity'>
                        Add Quantity
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <CustomInput
                            required
                            showLabel
                            type='number'
                            label='Add Quantity'
                            id='addQuantity'
                            infoText='Add Quantity info'
                            placeholder='Add Quantity'
                            value={value}
                            onChange={onChange}
                        />
                    </div>

                    <div className='text-center mb-5'>
                        <SubmitButton
                            lime={true}
                            text='Add Quantity'
                            loading={loading}
                        />
                    </div>
                </Modal.Body>
            </form>
        </Modal>
    )
}

export default AddQuantity
