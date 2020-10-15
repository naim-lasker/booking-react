import React from "react"
import DatePicker from "react-datepicker"

const DateInput = ({ icon, ...rest }) => {
    return (
        <div className='input-group flex-nowrap align-items-center'>

            <DatePicker
                className='form-control input-box py-2 border-right-0 datepicker'
                {...rest}
            />
            <span className='input-group-append'>
                <div className='input-group-text bg-transparent'>
                    <img src={icon} alt='' />
                </div>
            </span>
        </div>
    )
}

export default DateInput
