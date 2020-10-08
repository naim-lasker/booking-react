import React from "react"
import { Modal } from "react-bootstrap"
import { SubmitButton } from "../../UI/Button"
import { CustomInput } from "../../UI/InputField"

const EditCategory = ({show, onHide, onSubmit, value, onChange, loading}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size='md'
            aria-labelledby='edit-category-modal'
            centered
        >
            <form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title id='edit-category-modal'>
                        Edit Category
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <CustomInput
                            required
                            showLabel
                            type='text'
                            label='Category Name'
                            id='categoryName'
                            infoText='Category Name info'
                            placeholder='Category Name'
                            value={value}
                            onChange={onChange}
                        />
                    </div>

                    <div className='text-center mb-5'>
                        <SubmitButton
                            lime={true}
                            text='Edit Category'
                            loading={loading}
                        />
                    </div>
                </Modal.Body>
            </form>
        </Modal>
    )
}

export default EditCategory
