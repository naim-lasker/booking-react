import React, { Fragment } from "react"
import { Spinner } from "react-bootstrap"
import SweetAlert from "react-bootstrap-sweetalert"

export const CustomAlert = ({ show, onConfirm, message }) => {
    return (
        <SweetAlert
            show={show}
            success
            title='Success!'
            onConfirm={onConfirm}
            confirmBtnCssClass='gradient-btn gradient-blue button-small'
        >
            {message}
        </SweetAlert>
    )
}

export const WarningAlert = ({
    show,
    onConfirm,
    message,
    onCancel,
    loading,
}) => {
    return (
        <SweetAlert
            show={show}
            danger
            showCancel
            title='Delete?'
            onConfirm={onConfirm}
            confirmBtnCssClass='gradient-btn gradient-red button-small'
            confirmBtnText={
                loading ? (
                    <Spinner
                        as='span'
                        animation='border'
                        size='sm'
                        role='status'
                        aria-hidden='true'
                        className='ml-2 mb-1'
                    />
                ) : (
                    <span className='d-inline-block mr-1'>Delete</span>
                )
            }
            cancelBtnCssClass='gradient-btn gradient-blue button-small'
            onCancel={onCancel}
        >
            {message}
        </SweetAlert>
    )
}
