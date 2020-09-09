import React from "react"

const DateTimeInput = ({ }) => {
    return (
        <div className='input-group align-items-center'>
            <input
                type='text'
                className='form-control input-box py-2 border-right-0 datepicker'
                placeholder='29/08/2020'
            />
            <span className='input-group-append'>
                <div className='input-group-text bg-transparent'>
                    <img src='/images/icons/calendar.png' alt='' />
                </div>
            </span>
        </div>
    )
}

export default DateTimeInput
