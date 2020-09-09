import React from "react"

const DateTimeInput = ({ placeholder, icon }) => {
    return (
        <div className='input-group align-items-center'>
            <input
                type='text'
                className='form-control input-box py-2 border-right-0 datepicker'
                placeholder={placeholder}
            />
            <span className='input-group-append'>
                <div className='input-group-text bg-transparent'>
                    <img src={icon} alt='' />
                </div>
            </span>
        </div>
    )
}

export default DateTimeInput
