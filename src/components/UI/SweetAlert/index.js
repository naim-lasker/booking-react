import React from "react"
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


export const WarningAlert = ({ show, onConfirm, message, onCancel }) => {
    return (
        <SweetAlert
            show={show}
            danger
            title='Delete?'
            onConfirm={onConfirm}
            confirmBtnCssClass='gradient-btn gradient-red button-small'
            onCancel={onCancel}
        >
            {message}
        </SweetAlert>
    )
}