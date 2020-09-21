import React from "react"
import SweetAlert from "react-bootstrap-sweetalert"

const CustomAlert = ({ show, onConfirm, message }) => {
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

export default CustomAlert
