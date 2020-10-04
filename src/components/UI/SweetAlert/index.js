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
            showCancel
            title='Delete?'
            onConfirm={onConfirm}
            cancelBtnCssClass='gradient-btn gradient-blue button-small'
            confirmBtnCssClass='gradient-btn gradient-red button-small'
            onCancel={onCancel}
        >
            {message}
        </SweetAlert>
    )
}