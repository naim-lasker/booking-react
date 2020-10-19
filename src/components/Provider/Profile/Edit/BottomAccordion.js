import React from "react"
import { Accordion } from "react-bootstrap"
import PaymentAccordion from "./PaymentAccordion"
import PasswordAccordion from "./PasswordAccordion"

const BottomAccordion = () => {

    return (
        <div className='row justify-content-center mb-5'>
            <div className='col-lg-10'>
                <Accordion className='collapse-container'>
                    <PaymentAccordion />

                    <PasswordAccordion />
                </Accordion>
            </div>
        </div>
    )
}

export default BottomAccordion
