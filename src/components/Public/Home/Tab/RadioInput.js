import React from "react"

const RadioInput = ({ text, icon, ...rest }) => {
    return (
        <label className='w-100 d-flex align-items-center mb-0 justify-content-md-start justify-content-center'>
            <input
                type='radio'
                {...rest}
            />
            <div className='radio-tab d-flex justify-content-between align-items-center'>
                <p className='m-0'>{text}</p>
                <img src={icon} alt={text} />
            </div>
            <button className='question-icon ml-3'>?</button>
        </label>
    )
}

export default RadioInput
