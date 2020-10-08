import React from "react"
import { Modal } from "react-bootstrap"
import MainForm from "../../Account/Add/MainForm"

const AccountModal = (props) => {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='provider-add-account-modal'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='provider-add-account-modal'>
                    Add Account Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MainForm />
            </Modal.Body>

            <Modal.Footer className='justify-content-center'>
                <a href='/provider-category' >Add account details at a later time </a>
            </Modal.Footer>
        </Modal>
    )
}

export default AccountModal
