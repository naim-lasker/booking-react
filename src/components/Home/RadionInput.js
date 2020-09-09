import React from "react"

const RadionInput = ({ }) => {
    return (
        <label className='w-100 d-flex align-items-center mb-0 justify-content-md-start justify-content-center'>
            <input type='radio' name='test' value='small' />
            <div className='radio-tab d-flex justify-content-between align-items-center'>
                <p className='m-0'>Van</p>
                <img src='/images/icons/van.png' alt='' />
            </div>
            <button className='question-icon ml-3'>?</button>
        </label>
    )
}

export default RadionInput
